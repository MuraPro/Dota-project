import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './table';

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === 'function') {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
    };

    return (
        <tbody className="table_border">
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column, index) => (
                        <td className={`column${index}`} key={column}>
                            {renderContent(item, column)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired,
};

export default TableBody;
