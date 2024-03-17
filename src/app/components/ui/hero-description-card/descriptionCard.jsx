import React from 'react';
import PropTypes from 'prop-types';
import DropDownButton from '../../common/drop-down-button';

const DescriptionCard = ({ value, name }) => {
    return (
        <div className="card mb-3 ">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>История героя {name}</span>
                </h5>

                <DropDownButton>
                    <p style={{ textAlign: 'center' }}>
                        {value || 'История героя'}
                    </p>
                </DropDownButton>
            </div>
        </div>
    );
};

DescriptionCard.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
};

export default DescriptionCard;
