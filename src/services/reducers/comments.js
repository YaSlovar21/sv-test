import { GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, LOAD_COMMENT_TREE_REQUEST, LOAD_COMMENT_TREE_SUCCESS } from "../actions/comments"

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
                commentsIdsLoading: state.commentsIdsLoading.filter(i=>i!==newComment.id)
            }
        }

        case LOAD_COMMENT_TREE_REQUEST: {
            const rootCommentId = action.payload;
            return {
                ...state,
                treeLoading: {
                    ...state.treeLoading,
                    [rootCommentId]: true
                }
            }
        }
        
        case LOAD_COMMENT_TREE_SUCCESS: {
            const rootCommentId = action.payload;
            return {
                ...state,
                treeLoading: {
                    ...state.treeLoading,
                    [rootCommentId]: false //по хорошему тут бы удалить этот ключик 
                },
                treeLoaded: {
                    ...state.treeLoaded, 
                    [rootCommentId]: true
                }
            }
        }



        default: {
            return state
        }
    }
}
