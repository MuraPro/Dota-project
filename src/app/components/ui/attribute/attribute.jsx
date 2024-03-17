import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getData } from '../../../utils/transformData';
import {
    getAttributes,
    getAttributesLoadingStatus,
} from '../../../store/attributes';

const Attribute = ({ id, fs = 'fw-bold' }) => {
    const isLoading = useSelector(getAttributesLoadingStatus());
    const allAttributes = useSelector(getAttributes());

    const attribute = useMemo(
        () => getData(id, allAttributes),
        [id, allAttributes]
    );

    if (!isLoading) {
        return <span className={fs}>{attribute.name}</span>;
    }
};
Attribute.propTypes = {
    id: PropTypes.string,
    fs: PropTypes.string,
};
export default Attribute;
