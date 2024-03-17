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
    getUsersLoadingStatus,
    updateCurrentUser,
    updateUserRating,
} from '../../../store/users';
import {
    getAttributes,
    getAttributesLoadingStatus,
} from '../../../store/attributes';
import styles from './fp.module.css';
import Loader from '../../common/loader';
import WaveText from '../../common/wave/waveText';

const FavotitesPage = () => {
    const users = useSelector(getUsersList());
    const isLoading = useSelector(getUsersLoadingStatus());
    const dispatch = useDispatch();
    const currentUserId = useSelector(getCurrentUserId());
    const attributes = useSelector(getAttributes());
    const attributesLoading = useSelector(getAttributesLoadingStatus());
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAttr, setSelectedAttr] = useState();
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' });
    const pageSize = 8;
    const currentUser = useSelector(getCurrentUserData());
    const currentUserTransform = currentUser.favorites.slice(1);

    const handleBlur = () => {
        setSearchQuery(''); // Очистка поля input при потере фокуса
    };

    const favoritesUsers = currentUserTransform.map((id) => {
        return users.find((user) => user._id === id);
    });

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
    // if (favoritesUsers.length === 0) {
    //     return <WaveText />;
    // }

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
    const filteredUsers = filterUsers(favoritesUsers);
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedAttr();
    };

    if (!isLoading) {
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
                    {favoritesUsers.length === 0 ? (
                        <WaveText />
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="container d-flex align-items-center justify-content-center">
                <Loader />
            </div>
        );
    }
};
FavotitesPage.propTypes = {
    users: PropTypes.array,
};

export default FavotitesPage;
