import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { paginate } from '../../../utils/paginate';
import Pagination from '../../common/pagination/pagination';
import GroupList from '../../common/group-list';
import UserTable from '../../ui/hero-table/usersTable';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentUserData,
    getCurrentUserId,
    getUsersList,
    updateCurrentUser,
    updateUserRating,
} from '../../../store/users';
import {
    getAttributes,
    getAttributesLoadingStatus,
} from '../../../store/attributes';
import styles from './up.module.css';
import { getAbilitiesLoadingStatus } from '../../../store/abilities';
import { getRolesLoadingStatus } from '../../../store/roles';
import Loader from '../../common/loader';

const UsersListPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsersList());
    const currentUser = useSelector(getCurrentUserData());
    const currentUserId = useSelector(getCurrentUserId());
    const attributes = useSelector(getAttributes());
    const attributesLoading = useSelector(getAttributesLoadingStatus());
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAttr, setSelectedAttr] = useState();
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' });
    const pageSize = 8;

    const handleBlur = () => {
        setSearchQuery('');
    };

    function addUniqueElementToArray(arr, element) {
        const newArr = [...arr];
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
        return newArr;
    }

    function elementNotInArray(arr, element) {
        return !arr.includes(element);
    }

    function updateCurrentUserFavorites(arr, id) {
        const newArr = addUniqueElementToArray(arr, id);

        dispatch(
            updateCurrentUser({
                ...currentUser,
                favorites: newArr,
            })
        );
    }
    function removeElementFromArray(arr, id) {
        const newArr = arr.filter((item) => item !== id);
        dispatch(
            updateCurrentUser({
                ...currentUser,
                favorites: newArr,
            })
        );
    }

    const handleToggleBookMark = (id) => {
        const user = users.find((u) => u._id === id);
        dispatch(
            updateUserRating(
                {
                    ...user,
                    bookmark: !user.bookmark,
                },
                id
            )
        );
        if (elementNotInArray(currentUser.favorites, id) && !user.bookmark) {
            updateCurrentUserFavorites(currentUser.favorites, id);
        }

        if (user.bookmark) {
            removeElementFromArray(currentUser.favorites, id);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedAttr, searchQuery]);

    const handleAttributeSelect = (item) => {
        if (searchQuery !== '') setSearchQuery('');
        setSelectedAttr(item);
    };
    const handleSearchQuery = ({ target }) => {
        setSelectedAttr(undefined);
        setSearchQuery(target.value);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        function filterUsers(data) {
            const filteredUsers = searchQuery
                ? data.filter(
                      (user) =>
                          user.name
                              .toLowerCase()
                              .indexOf(searchQuery.toLowerCase()) !== -1
                  )
                : selectedAttr
                  ? data.filter(
                        (user) =>
                            JSON.stringify(user.attributes) ===
                            JSON.stringify(selectedAttr)
                    )
                  : data;
            return filteredUsers.filter((u) => u._id !== currentUserId);
        }
        const filteredUsers = filterUsers(users);
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedAttr();
        };

        return (
            <div className="row gx-5">
                {attributes && !attributesLoading && (
                    <div className="col-lg-2">
                        <GroupList
                            selectedItem={selectedAttr}
                            items={attributes}
                            onItemSelect={handleAttributeSelect}
                            clearFilter={clearFilter}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={clearFilter}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginLeft: '10px',
                                marginBottom: '10px',
                            }}
                        >
                            Сброс
                            <i
                                className="bi bi-arrow-repeat"
                                onClick={clearFilter}
                                style={{
                                    fontSize: '20px',
                                    color: 'white',
                                }}
                            ></i>
                        </button>
                    </div>
                )}

                <div className="col-lg-10">
                    <input
                        className={styles.search_input}
                        type="text"
                        name="searchQuery"
                        placeholder="Search..."
                        onChange={handleSearchQuery}
                        value={searchQuery}
                        onBlur={handleBlur}
                    />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <Loader />
        </div>
    );
};
UsersListPage.propTypes = {
    users: PropTypes.array,
};

export default UsersListPage;
