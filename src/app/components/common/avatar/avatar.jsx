import avatar from '../../../../assets/main/avatar.webp';
import PropTypes from 'prop-types';

const Avatar = ({ img, size }) => {
    return (
        <img
            src={img || avatar}
            className="rounded mx-auto"
            width={size}
            height={size}
            style={{ objectFit: 'cover' }}
        />
    );
};

Avatar.propTypes = {
    img: PropTypes.string,
    size: PropTypes.string,
};

export default Avatar;
