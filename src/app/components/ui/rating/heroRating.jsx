import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rate, fs = 'fw-bold' }) => {
    return (
        <span
            className={fs}
            style={{
                fontSize: '15px',
                color: 'green',
                marginLeft: '15px',
            }}
        >
            {rate} ★
        </span>
    );
};

Rating.propTypes = {
    rate: PropTypes.number,
    fs: PropTypes.string,
};
export default Rating;
