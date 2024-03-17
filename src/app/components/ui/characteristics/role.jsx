import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getRoleImg } from '../../../utils/getRoleImg';
import { Link } from 'react-router-dom';
import styles from './role.module.css';

const Role = ({ name, type }) => {
    const { img } = useMemo(() => getRoleImg(type), [type]);

    return (
        <Link className={styles.link} to={`/info#${type}`}>
            <div className="d-flex align-items-center flex-wrap">
                <span className="pr-2 fw-bold">{name}</span>
                <img
                    src={img}
                    alt=""
                    width="20px"
                    height="20px"
                    className="d-block"
                />
            </div>
        </Link>
    );
};

Role.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
};

export default Role;
