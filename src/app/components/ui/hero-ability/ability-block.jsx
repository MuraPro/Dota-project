import PropTypes from 'prop-types';
import styles from './ability.module.css';

const AbilityBlock = ({ title, text, img }) => {
    return (
        <div className="w-100 p-1 mb-3">
            <h5 className="card-title">
                {title || 'Название способности вашего героя'}
            </h5>
            <div className="d-flex align-items-start gap-2 flex-md-row flex-column ">
                <div className="">
                    <img
                        src={img}
                        alt=""
                        width="80px"
                        height="80px"
                        className={styles.imgBorder}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="w-100 p-0">
                    <p>{text || 'Описание способности'}</p>
                </div>
            </div>
        </div>
    );
};

AbilityBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
};

export default AbilityBlock;
