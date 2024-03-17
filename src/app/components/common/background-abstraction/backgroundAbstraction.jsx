import PropTypes from 'prop-types';
import bg from '../../../../assets/main/bg.jpg';

const BackgroundAbstraction = ({ children }) => {
    return (
        <div
            style={{
                position: 'relative',
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                padding: '20px',
            }}
        >
            {children}
        </div>
    );
};

BackgroundAbstraction.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default BackgroundAbstraction;
