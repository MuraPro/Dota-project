import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    getCurrentUserId,
    getUsersList,
    getUsersLoadingStatus,
} from '../../../store/users';
import { getData } from '../../../utils/transformData';
import Avatar from '../../common/avatar';
import {
    getAttributes,
    getAttributesLoadingStatus,
} from '../../../store/attributes';
import { getHeroImg } from '../../../utils/getHeroImg';
import { getAttributeImg } from '../../../utils/getAttributeImg';
import StarRating from '../../common/rate';

const UserCard = ({ user }) => {
    const history = useHistory();
    const currentUserId = useSelector(getCurrentUserId());
    const isLoadingUsers = useSelector(getUsersLoadingStatus());
    const isLoadingAttributes = useSelector(getAttributesLoadingStatus());
    const allAttributes = useSelector(getAttributes());
    const attributeId = user.attributes;
    const users = useSelector(getUsersList());
    const id = useSelector(getCurrentUserId());
    const [currentIndex, setCurrentIndex] = useState(findIndexById(id));

    function findIndexById(id) {
        return users.findIndex((item) => item._id === id);
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            history.push(`/users/${users[currentIndex - 1]._id}`);
        }
    };

    const handleNext = () => {
        if (currentIndex < users.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            history.push(`/users/${users[currentIndex + 1]._id}`);
        }
    };

    const attribute = useMemo(
        () => getData(attributeId, allAttributes),
        [attributeId, allAttributes]
    );

    const handleClick = () => {
        history.push(history.location.pathname + '/edit');
    };

    // const { img } = getHeroImg(user.name);
    const { img } = useMemo(() => getHeroImg(user.name));

    if (!isLoadingUsers && !isLoadingAttributes && img) {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center position-relative">
                        <div className="align-self-end">
                            <button
                                className=""
                                title="Создай собственного персонажа и придумай историю"
                                onClick={handleClick}
                                style={{ background: 'transparent' }}
                                disabled={currentUserId !== user._id}
                            >
                                <i
                                    className="bi bi-gear"
                                    style={{ fontSize: '30px' }}
                                ></i>
                            </button>
                        </div>

                        <Avatar img={user.avatar || img} size="200" />
                        <div className="mt-3">
                            <h4>{user.name}</h4>
                            {currentUserId !== user._id ? (
                                <StarRating user={user} />
                            ) : (
                                <>
                                    <p className="text-darck mb-1">
                                        Основной атрибут {attribute.name}
                                    </p>
                                    <img
                                        src={getAttributeImg(attribute.type)}
                                        style={{ marginBottom: '12px' }}
                                    />
                                </>
                            )}
                        </div>
                        <div className="align-self-end">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                style={{ background: 'transparent' }}
                            >
                                <i
                                    className="bi bi-caret-up"
                                    style={{ fontSize: '30px' }}
                                ></i>
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === users.length - 1}
                                style={{ background: 'transparent' }}
                            >
                                <i
                                    className="bi bi-caret-down"
                                    style={{ fontSize: '30px' }}
                                ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
UserCard.propTypes = {
    user: PropTypes.object,
};

export default UserCard;
