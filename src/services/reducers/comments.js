import { GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS } from "../actions/comments"

const initialState = {
    commentsIdsLoading: [],
    itemsById: {},
    treeLoading: {}, //по id будем смотреть для какого коммента(id) грузится дерево
    treeLoaded: {}
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COMMENT_REQUEST: {
            const loadingCommentId = action.payload;
            return {
                ...state,
                commentsIdsLoading: [...state.commentsIdsLoading, loadingCommentId]
            }
        }

        case GET_COMMENT_SUCCESS: {
            const newComment = action.payload;
            return {
                ...state,
                itemsById: {
                    ...state.itemsById,
                    [newComment.id]: newComment
                },
                commentsIdsLoading: state.commentsIdsLoading.filter(i=>i!=newComment.id)
            }
        }
        
        default: {
            return state
        }
    }
}
