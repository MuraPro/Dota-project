import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../../common/table';
import { Link } from 'react-router-dom';
import Roles from '../characteristics';
import Attribute from '../attribute/attribute';
import Type from '../type/type';
import Rating from '../rating';
import BookMark from '../../common/bookmark';
import styles from './ht.module.css';
import { getHeroIconImg } from '../../../utils/getHeroIconImg';

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark }) => {
    const columns = {
        name: {
            path: 'name',
            name: 'Имя',
            component: (user) => {
                const { img } = getHeroIconImg(user.name);
                return (
                    <div className={styles.hero_block}>
                        <Link
                            to={`/users/${user._id}`}
                            className={styles.hero_name}
                        >
                            {
                                <img
                                    src={img || user.avatar}
                                    alt={'Axe'}
                                    className={styles.herro_img}
                                    width="20px"
                                    height="20px"
                                />
                            }
                            {user.name}
                        </Link>
                    </div>
                );
            },
        },
        roles: {
            name: 'Роль',
            component: (user) => <Roles roles={user.roles} />,
        },
        attributes: {
            name: 'Атрибут',
            component: (user) => (
                <Attribute id={user.attributes} fs={'fw-normal'} />
            ),
        },
        type: {
            name: 'Типаж',
            component: (user) => <Type id={user.type} fs={'fw-normal'} />,
        },
        rate: {
            path: 'rate',
            name: 'Оценка',
            component: (user) => <Rating rate={user.rate} fs={'fw-normal'} />,
        },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            ),
        },
    };

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
};

export default UserTable;
