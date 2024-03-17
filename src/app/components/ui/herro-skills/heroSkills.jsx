import PropTypes from 'prop-types';
import Ability from '../hero-ability';
import styles from './herroSkills.module.css';

const HeroSkills = ({ user }) => {
    return <Ability user={user} />;
};

HeroSkills.propTypes = {
    user: PropTypes.object,
};
HeroSkills.defaultProps = {};

export default HeroSkills;
