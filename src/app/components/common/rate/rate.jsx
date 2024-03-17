import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateUserRating,
    updateCurrentUser,
    getCurrentUserData,
} from '../../../store/users';

const StarRating = ({ user }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);

    const currentUser = useSelector(getCurrentUserData());

    function addUniqueElementToArray(arr, element) {
        const newArr = [...arr];
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
        return newArr;
    }

    function elementNotInArray(arr, element) {
        return !arr.includes(element);
    }

    function updateCurrentUserRatedId(currentUserRateId, id) {
        const newArr = addUniqueElementToArray(currentUserRateId, id);

        dispatch(
            updateCurrentUser({
                ...currentUser,
                ratedUserId: newArr,
            })
        );
    }

    const handleStarClick = (value) => {
        setRating(value);
        if (elementNotInArray(currentUser.ratedUserId, user._id)) {
            dispatch(
                updateUserRating(
                    {
                        ...user,
                        rate: user.rate + value,
                    },
                    user._id
                )
            );
        }
        updateCurrentUserRatedId(currentUser.ratedUserId, user._id);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <Star
                    key={value}
                    selected={value <= rating}
                    onClick={() => handleStarClick(value)}
                />
            ))}
            <p className="fw-bold">Рейтинг: {user.rate} звезд</p>
        </div>
    );
};

const Star = ({ selected = false, onClick }) => (
    <span
        style={{
            color: selected ? 'yellow' : 'gray',
            cursor: 'pointer',
            fontSize: '30px',
        }}
        onClick={onClick}
    >
        ★
    </span>
);

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};
StarRating.propTypes = {
    user: PropTypes.object,
};

export default StarRating;
