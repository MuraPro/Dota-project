import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from '../components/ui/login-form';
import RegisterForm from '../components/ui/registr-form';
import styles from './layout.module.css';

const LogIn = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === 'register' ? type : 'login'
    );
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        );
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === 'register' ? (
                        <>
                            <h3 className="mb-4">Register</h3>
                            <RegisterForm />
                            <p>
                                Уже зарегестрированы?
                                <a
                                    role="button"
                                    className="text-success"
                                    onClick={toggleFormType}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Войти
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            <LoginForm />
                            <p>
                                Не зарегестрированы?
                                <a
                                    role="button"
                                    onClick={toggleFormType}
                                    className="text-danger"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Регистрация
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LogIn;
