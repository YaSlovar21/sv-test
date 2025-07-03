import { getNewByIdRequest } from "../../utils/hack-api";

export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';
export const GET_COMMENT_REQUEST = 'GET_COMMENT_REQUEST';

export const LOAD_COMMENT_TREE_REQUEST = 'LOAD_COMMENT_TREE_REQUEST';
export const LOAD_COMMENT_TREE_ERROR = 'LOAD_COMMENT_TREE_ERROR';
export const LOAD_COMMENT_TREE_SUCCESS = 'LOAD_COMMENT_TREE_SUCCESS';

export const getComment = (id) => async (dispatch) => {
    dispatch({ 
        type: GET_COMMENT_REQUEST,
        payload: id
    });
    try {
        const commentObj = await getNewByIdRequest(id);
        if (commentObj && commentObj.type === 'comment') { // на всякий пожарный
            dispatch({
                type: GET_COMMENT_SUCCESS,
                payload: commentObj
            });
        } else {
            return;
        }
    } catch (e) {
        dispatch({ type: GET_COMMENT_ERROR, payload: e })
    }
}

export const loadCommentTree = (rootCommentId) => async (dispatch, getState) => {
    dispatch({ 
        type: LOAD_COMMENT_TREE_REQUEST, 
        payload: rootCommentId
    });

    try {
        const loadTree = async (commentId) => {
            const state=getState();
            console.log('!!!!!STATE!!!!', state);
            let comment;
            //чтобы заново не запрашивать рут комментарий
            if (!state.comments.itemsById[commentId]) {
                comment = await dispatch(getComment(commentId));
            }
            if (comment?.kids) {
                await Promise.all(comment.kids.map(cId => loadTree(cId)));
            }
        }
        await loadTree(rootCommentId);
        dispatch({
            type: LOAD_COMMENT_TREE_SUCCESS,
            payload: rootCommentId
        })
    } catch (e) {
        dispatch({
            type: LOAD_COMMENT_TREE_ERROR,
            payload: e
        })
    }

}