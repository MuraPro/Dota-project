import { orderBy } from 'lodash';
import React, { useEffect } from 'react';
import CommentsList, { AddCommentForm } from '../../common/comments';
import { useDispatch, useSelector } from 'react-redux';
import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment,
} from '../../../store/comments';
import { useParams } from 'react-router-dom';
import Loader from '../../common/loader';

const Comments = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(getCommentsLoadingStatus());

    useEffect(() => {
        dispatch(loadCommentsList());
    }, [userId]);

    const comments = useSelector(getComments());

    const handleSubmit = (data) => {
        dispatch(createComment(data, userId));
    };
    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };
    const sortedComments = orderBy(comments, ['created_at'], ['desc']);
    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Коментарий</h2>
                        <hr />
                        {!isLoading ? (
                            <CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
