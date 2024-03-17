import React from 'react';
import PropTypes from 'prop-types';
import styles from './bookmark.module.css';
const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest} className={styles.bookmark}>
            <i
                style={{
                    color: 'green',
                    marginLeft: '15px',
                }}
                className={'bi bi-bookmark' + (status ? '-heart-fill' : '')}
            ></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool,
};

export default BookMark;
