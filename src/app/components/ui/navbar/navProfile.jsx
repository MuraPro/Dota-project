import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from '../../../store/users';
import avatar from '../../../../assets/main/avatar.webp';

function NavProfile() {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (currentUser) {
        return (
            <div className="dropdown" onClick={toggleMenu}>
                <div className="btn dropdown-toggle d-flex align-items-center text-white">
                    <div className="me-2">{currentUser.name}</div>
                    <img
                        src={currentUser.avatar || avatar}
                        alt=""
                        height="40"
                        width="40"
                        className="img-responsive rounded-circle"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div
                    className={'w-100 dropdown-menu' + (isOpen ? ' show' : '')}
                >
                    <Link
                        to={`/users/${currentUser._id}`}
                        className="dropdown-item"
                    >
                        Профиль
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                        Выйти
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavProfile;
