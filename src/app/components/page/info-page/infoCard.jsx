import React, { useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getRoleImg } from '../../../utils/getRoleImg';
import BackHistoryButton from '../../common/back-button';
import styles from './ip.module.css';

const InfoCard = ({ type, name, main, general }) => {
    const { icon } = useMemo(() => getRoleImg(type), [type]);

    const scrollIntoViewCallback = useCallback(() => {
        const sectionId = window.location.hash.substring(1);
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            sectionElement.classList.add(styles.choosed);
        }

        return () => {
            if (sectionElement) {
                sectionElement.classList.remove(styles.choosed);
            }
        };
    }, [type]);

    useEffect(() => {
        scrollIntoViewCallback();
    }, [scrollIntoViewCallback]);

    return (
        <div className="card mb-3" id={type}>
            <div className="card-body">
                <img
                    src={icon}
                    alt=""
                    className={styles.card_img}
                    width="100px"
                />
                <h5 className="card-title">{name}</h5>
                <span className="card-text fw-bold">{main}</span>
                <p className="card-text p-2">{general}</p>
                <BackHistoryButton />
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    type: PropTypes.string,
    main: PropTypes.string,
    general: PropTypes.string,
    name: PropTypes.string,
};

export default InfoCard;
