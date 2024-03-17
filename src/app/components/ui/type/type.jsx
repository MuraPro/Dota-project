import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getData } from '../../../utils/transformData';
import { getTypes, getTypesLoadingStatus } from '../../../store/type';

const Type = ({ id, fs = 'fw-bold' }) => {
    const isLoading = useSelector(getTypesLoadingStatus());
    const types = useSelector(getTypes());

    const type = useMemo(() => getData(id, types), [id, types]);

    if (!isLoading) {
        return <span className={fs}>{type.name}</span>;
    }
};
Type.propTypes = {
    id: PropTypes.string,
    fs: PropTypes.string,
};
export default Type;
