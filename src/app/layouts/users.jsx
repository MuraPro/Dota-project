import { Redirect, useParams } from 'react-router-dom';
import { UsersLoader } from '../components/ui/hoc';
import { useSelector } from 'react-redux';
import { getCurrentUserId } from '../store/users';
import EditUserPage from '../components/page/edit-user-page';
import UserPage from '../components/page/user-page';
import UsersListPage from '../components/page/users-list-page';

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    const currentUserId = useSelector(getCurrentUserId());

    return (
        <UsersLoader>
            {userId ? (
                edit ? (
                    userId === currentUserId ? (
                        <EditUserPage />
                    ) : (
                        <Redirect to={`/users/${currentUserId}/edit`} />
                    )
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </UsersLoader>
    );
};

export default Users;
