import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../../ui/hero-card';
import Comments from '../../ui/comments/comments';
import { getUserById } from '../../../store/users';
import { useSelector } from 'react-redux';
import DescriptionCard from '../../ui/hero-description-card';
import HeroSkills from '../../ui/herro-skills';
import HeroParrametrs from '../../ui/hero-parametrs';
import HeroProperties from '../../ui/hero-properties';
import Loader from '../../common/loader';
import { getRandomImage } from '../../../utils/getRandomImg';

const UserPage = ({ userId }) => {
    const user = useSelector(getUserById(userId));
    const img = getRandomImage();
    if (user) {
        return (
            <section className="row gutters-sm">
                <div className="col-md-5 mb-3">
                    <UserCard user={user} />
                    <HeroProperties user={user} />
                    <DescriptionCard value={user.description} {...user} />
                    {img && <img src={img} alt="" width="100%" />}
                </div>
                <div className="col-md-7">
                    <HeroParrametrs user={{ ...user }} />
                    <HeroSkills user={{ ...user }} />
                    <Comments />
                </div>
            </section>
        );
    } else {
        return <Loader />;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default UserPage;
