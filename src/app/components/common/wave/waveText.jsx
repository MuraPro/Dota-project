import React from 'react';
import './wave.css'; // Подключаем файл стилей для анимации

const WaveText = () => {
    return (
        <div className="wave-container">
            <div className="wave-text">
                Нет избраных героев<span className="wave-dots">...</span>
            </div>
        </div>
    );
};

export default WaveText;
