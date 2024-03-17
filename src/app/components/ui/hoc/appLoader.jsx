import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList,
} from '../../../store/users';
import { loadRolesList } from '../../../store/roles';
import { loadAttributesList } from '../../../store/attributes';
import { loadAbilitiesList } from '../../../store/abilities';
import { loadTypesList } from '../../../store/type';
import { loadRolesInfoList } from '../../../store/roles-info';
import Loader from '../../common/loader/loader';

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());

    useEffect(() => {
        dispatch(loadTypesList());
        dispatch(loadAbilitiesList());
        dispatch(loadRolesList());
        dispatch(loadAttributesList());
        dispatch(loadRolesInfoList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);

    if (usersStatusLoading) {
        return (
            <div className="container d-flex align-items-center justify-content-center">
                <Loader />
            </div>
        );
    }

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default AppLoader;
