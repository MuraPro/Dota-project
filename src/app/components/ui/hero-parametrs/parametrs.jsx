import PropTypes from 'prop-types';
import forceImg from '../../../../assets/icons/power.png';
import dexterityImg from '../../../../assets/icons/dexterity.png';
import intelligenceImg from '../../../../assets/icons/intelligence.png';
import swordImg from '../../../../assets/icons/sword.png';
import speedImg from '../../../../assets/icons/speed.png';
import shieldImg from '../../../../assets/icons/shield.png';

const HeroParrametrs = ({ user }) => {
    const { force, dexterity, intelligence, sword, shield, speed } = user;
    return (
        <div className="card mb-3">
            <div
                className="card-body"
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    marginBottom: '20px',
                }}
            >
                <span className="badge text-dark d-flex align-items-center">
                    <img src={forceImg} />
                    <p className="ms-2 mb-0">{force || '0'}</p>
                </span>
                <span className="badge text-dark d-flex align-items-center">
                    <img src={dexterityImg} />
                    <p className="ms-2 mb-0">{dexterity || '0'}</p>
                </span>
                <span className="badge text-dark d-flex align-items-center">
                    <img src={intelligenceImg} />
                    <p className="ms-2 mb-0">{intelligence || '0'}</p>
                </span>
                <span className="badge text-dark d-flex align-items-center">
                    <img src={swordImg} />
                    <p className="ms-2 mb-0">{sword || '0'}</p>
                </span>
                <span className="badge text-dark d-flex align-items-center">
                    <img src={shieldImg} />
                    <p className="ms-2 mb-0">{shield || '0'}</p>
                </span>
                <span className="badge text-dark d-flex align-items-center">
                    <img src={speedImg} />
                    <p className="ms-2 mb-0">{speed || '0'}</p>
                </span>
            </div>
        </div>
    );
};

HeroParrametrs.propTypes = {
    user: PropTypes.object,
    force: PropTypes.string,
    dexterity: PropTypes.string,
    intelligence: PropTypes.string,
    sword: PropTypes.string,
    shield: PropTypes.string,
    speed: PropTypes.string,
};
HeroParrametrs.defaultProps = {
    force: '0',
    dexterity: '0',
    intelligence: '0',
    sword: '0',
    shield: '0',
    speed: '0',
};

export default HeroParrametrs;
