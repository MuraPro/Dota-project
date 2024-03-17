import PropTypes from 'prop-types';
import styles from './gl.module.css';
import { getAttributeImg } from '../../../utils/getAttributeImg';

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem,
}) => {
    const renderListItem = (item) => (
        <li
            key={item[valueProperty]}
            className={`list-group-item ${item._id === selectedItem ? 'active' : ''}`}
            onClick={() => onItemSelect(item._id)}
            role="button"
        >
            <button type="button" className={styles.filter_button}>
                <img
                    src={getAttributeImg(item.type)}
                    alt=""
                    width="25px"
                    height="25px"
                    style={{ marginRight: '10px' }}
                />
                {item[contentProperty]}
            </button>
        </li>
    );

    return (
        <ul className={styles.select_list}>
            {Array.isArray(items)
                ? items.map(renderListItem)
                : Object.values(items).map(renderListItem)}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name',
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.string,
};

export default GroupList;
