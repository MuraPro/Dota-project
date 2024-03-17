import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DropDownButton = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <button
                onClick={toggleDropdown}
                className="btn d-flex align-items-center p-1 justify-content-center text-secondary"
            >
                {title || ''}
                {isOpen ? (
                    <i
                        className=" bi-caret-down-fill"
                        style={{ fontSize: '20px' }}
                    ></i>
                ) : (
                    <i
                        className="bi bi-caret-up-fill"
                        style={{ fontSize: '20px' }}
                    ></i>
                )}
            </button>

            {isOpen && children}
        </>
    );
};
DropDownButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    title: PropTypes.string,
};

export default DropDownButton;
