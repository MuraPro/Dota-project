import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getData } from '../../../utils/transformData';
import { getTypes, getTypesLoadingStatus } from '../../../store/type';
import { getTypesImg } from '../../../utils/getTypesImg';

const HeroTypeCard = ({ user }) => {
    const isLoading = useSelector(getTypesLoadingStatus());
    const allTypes = useSelector(getTypes());
    const typeId = user.type;

    const type = useMemo(() => getData(typeId, allTypes), [typeId, allTypes]);
    // const { img } = getTypesImg(type.type);
    const { img } = useMemo(() => getTypesImg(type.type));

    if (!isLoading) {
        return (
            <span className="fw-bold">
                {type.name}
                <img
                    src={img}
                    alt=""
                    width="15px"
                    height="15px"
                    style={{ marginLeft: '10px' }}
                />
            </span>
        );
    }
};

HeroTypeCard.propTypes = {
    user: PropTypes.object,
};

export default HeroTypeCard;
