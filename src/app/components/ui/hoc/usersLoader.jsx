import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getDataStatus, loadUsersList } from '../../../store/users';
import { useEffect } from 'react';
import Loader from '../../common/loader/loader';

const UsersLoader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus());
    const dispatch = useDispatch();

    useEffect(() => {
        if (!dataStatus) dispatch(loadUsersList());
    }, []);

    if (!dataStatus) {
        return (
            <div className="container d-flex align-items-center justify-content-center">
                <Loader />
            </div>
        );
    }
    return children;
};

UsersLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default UsersLoader;
