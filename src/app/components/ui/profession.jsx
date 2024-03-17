import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
    getProfessions,
    getProfessionsLoadingStatus,
} from '../../store/professions';
import { getData } from '../../utils/transformData';

const Profession = ({ id }) => {
    const isLoading = useSelector(getProfessionsLoadingStatus());
    const allProfessions = useSelector(getProfessions());

    const prof = useMemo(
        () => getData(id, allProfessions),
        [id, allProfessions]
    );

    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return 'Loading...';
};
Profession.propTypes = {
    id: PropTypes.string,
};
export default Profession;
