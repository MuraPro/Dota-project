import React, { useState, useEffect } from 'react';
import bg1 from '../../assets/page/bg5.jpg';
import bg2 from '../../assets/page/bg2.png';
import bg3 from '../../assets/page/bg3.jpg';
import { nanoid } from 'nanoid';
import './main.css';

const Main = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [bg1, bg2, bg3];
    const text = [
        'Почувствуй себя создателем',
        'Создай собственного игрока',
        'Регистрируйся для доступа к платформе',
    ];

    const handlePrev = () => {
        setCurrentSlide(
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide(
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={nanoid()}
                        className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                    >
                        <h1 className="position-relative">{text[index]}</h1>

                        <img
                            src={slide}
                            className="d-block w-100"
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={handlePrev}>
                <i
                    className="bi bi-caret-left"
                    style={{ fontSize: '30px' }}
                ></i>
            </button>
            <button className="carousel-control-next" onClick={handleNext}>
                <i
                    className="bi bi-caret-right"
                    style={{ fontSize: '30px' }}
                ></i>
            </button>
        </div>
    );
};

export default Main;
