import React from 'react';
import { Link } from 'react-router-dom';
import NavProfile from './navProfile';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../store/users';
import Steam from '../../../../assets/main/navbar.png';

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <nav className="navbar mb-3 bg-dark">
            <div className="container-fluid ">
                <div className="container d-flex flex-row justify-content-between align-items-center">
                    <ul className="nav">
                        <li>
                            <Link
                                className="nav-link navbar-brand "
                                aria-current="page"
                                to="#"
                            >
                                <img
                                    src={Steam}
                                    alt=""
                                    width="40px"
                                    height="40px"
                                />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                aria-current="page"
                                to="/"
                            >
                                Главная
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-white"
                                        aria-current="page"
                                        to="/users"
                                    >
                                        Герои
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-white"
                                        aria-current="page"
                                        to="/info"
                                    >
                                        Информация
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-white"
                                        aria-current="page"
                                        to="/favorites"
                                    >
                                        Избранное
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                    <div className="d-flex align-self-center">
                        {isLoggedIn ? (
                            <NavProfile />
                        ) : (
                            <Link
                                className="nav-link text-white"
                                aria-current="page"
                                to="/login"
                            >
                                Войти
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
