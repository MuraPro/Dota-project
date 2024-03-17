import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsByIds } from '../../../utils/transformData';
import {
    getRoles,
    getRolesLoadingStatus,
    loadRolesList,
} from '../../../store/roles';
import Role from './role';

const RolesList = ({ roles }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getRolesLoadingStatus());
    const allRoles = useSelector(getRoles());

    useEffect(() => {
        dispatch(loadRolesList());
    }, []);

    const rolesList = useMemo(
        () => getItemsByIds(roles, allRoles),
        [roles, allRoles]
    );

    if (!isLoading) {
        return (
            <>
                {rolesList.map((role) => (
                    <Role key={role._id} {...role} />
                ))}
            </>
        );
    }
};

RolesList.propTypes = {
    roles: PropTypes.array,
};

export default RolesList;
