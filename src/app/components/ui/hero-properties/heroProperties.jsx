import PropTypes from 'prop-types';
import Roles from '../characteristics';
import { useSelector } from 'react-redux';
import Attribute from '../attribute/attribute';
import HeroTypeCard from '../hero-type-attack';
import { getUsersLoadingStatus } from '../../../store/users';
import { getRolesLoadingStatus } from '../../../store/roles';
import { getAttributesLoadingStatus } from '../../../store/attributes';
import styles from './hp.module.css';

const HeroProperties = ({ user }) => {
    const isLoading = useSelector(getUsersLoadingStatus());
    const isLoadingAttribute = useSelector(getAttributesLoadingStatus());
    const isLoadingRoles = useSelector(getRolesLoadingStatus());

    console.log(user);

    if (!isLoading && !isLoadingAttribute && !isLoadingRoles) {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">
                        Основные характеристики героя
                    </h5>
                    <ul className={styles.property_list}>
                        <li className={styles.property_item}>
                            <span>Основной атрибут: </span>
                            {<Attribute id={user.attributes} />}
                        </li>
                        <li className={styles.property_item}>
                            Роли: {<Roles roles={user.roles} />}
                        </li>
                        <li className={styles.property_item}>
                            Тип атаки: {<HeroTypeCard user={user} />}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

HeroProperties.propTypes = {
    user: PropTypes.object,
};

export default HeroProperties;
