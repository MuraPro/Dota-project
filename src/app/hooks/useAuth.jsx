import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import axios from 'axios';
import userService from '../services/user.service';
import {
    setTokens,
    getAccessToken,
    removeAuthData,
} from '../services/localStorage.service';
import { useHistory } from 'react-router-dom';

export const httpAuth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY,
    },
});
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const history = useHistory();
    const [currentUser, setUser] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async function updateUserData(data) {
        try {
            const { content } = await userService.update(data);
            setUser(content);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function logOut() {
        removeAuthData();
        setUser(null);
        history.push('/');
    }

    async function signUp({ email, password, ...rest }) {
        try {
            const { data } = await httpAuth.post('accounts:signUp', {
                email,
                password,
                returnSecureToken: true,
            });
            setTokens(data);
            await createUser({
                _id: data.localId,
                email,
                rate: randomInt(1, 5),
                completedMeetings: randomInt(0, 200),
                image: 'https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/a111cd30606669a973e3aeb8ad1c1ab1.png/s/s1200x/a/152595/sc/217',
                ...rest,
            });
            history.push('/');
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            if (code === 400) {
                if (message === 'EMAIL_EXISTS') {
                    const errorObject = {
                        email: 'Пользователь с таким Email уже существует',
                    };
                    throw errorObject;
                }
            }
            // throw new Error
        }
    }
    async function signIn({ email, password }) {
        try {
            const { data } = await httpAuth.post(
                'accounts:signInWithPassword',
                {
                    email,
                    password,
                    returnSecureToken: true,
                }
            );
            setTokens(data);
            await getUserData();
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            if (code === 400) {
                switch (message) {
                    case 'INVALID_LOGIN_CREDENTIALS':
                        throw new Error(
                            'Email или пароль введены не корректно'
                        );
                    default:
                        throw new Error(
                            'Слишком много попыток входа. Попробуйте позднее.'
                        );
                }
            }
        }
    }

    async function createUser(data) {
        try {
            const { content } = await userService.create(data);
            setUser(content);
        } catch (error) {
            errorCatcher(error);
        }
    }

    async function getUserData() {
        try {
            const { content } = await userService.getCurrentUser();
            setUser(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (getAccessToken()) {
            getUserData();
        } else {
            setLoading(false);
        }
    }, []);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <AuthContext.Provider
            value={{
                signUp,
                signIn,
                currentUser,
                logOut,
                updateUserData,
            }}
        >
            {!isLoading ? children : 'Loading...'}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default AuthProvider;
