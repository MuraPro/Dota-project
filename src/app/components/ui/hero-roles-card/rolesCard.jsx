import React from 'react';
import PropTypes from 'prop-types';
import Roles from '../characteristics';

const RolesCard = ({ data }) => {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>Роль героя в игре</span>
                </h5>
                <p className="card-text">
                    <Roles roles={data} />
                </p>
            </div>
        </div>
    );
};
RolesCard.propTypes = {
    data: PropTypes.array,
};

export default RolesCard;
