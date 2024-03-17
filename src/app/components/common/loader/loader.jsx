import React, { useState, useEffect } from 'react';
import styles from './loader.module.css';

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible((prevIsVisible) => !prevIsVisible);
        }, 700);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.loader_container}>
            {isVisible && (
                <span
                    className={`${styles.loader_text} ${isVisible ? 'visible' : 'hidden'}`}
                >
                    Загрузка данных...
                </span>
            )}
        </div>
    );
};

export default Loader;
