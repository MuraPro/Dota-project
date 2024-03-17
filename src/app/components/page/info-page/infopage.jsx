import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import InfoCard from './infoCard';
import {
    getRolesInfo,
    getRolesInfoLoadingStatus,
} from '../../../store/roles-info';
import style from './ip.module.css';
import riki from '../../../../assets/icons/Riki.png';

const InfoPage = () => {
    const roles = useSelector(getRolesInfo());
    const isLoading = useSelector(getRolesInfoLoadingStatus());

    if (!isLoading) {
        return (
            <section className={style.section}>
                {roles.map((role) => {
                    return <InfoCard key={role._id} {...role} />;
                })}
            </section>
        );
    }
};

export default InfoPage;
