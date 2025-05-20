import { GET_NEWS_IDS_LIST_REQUEST, GET_NEWS_IDS_LIST_SUCCESS, GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS } from "../actions/news";


const initialState = {
    isGettingNewsList: false, 
    isGettingNewsIds: false, 
    isErrorWhileGettingNews: false,
    items: [],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_IDS_LIST_REQUEST: {
            return {
                ...state,
                isGettingNewsIds: true
            };
        }
        case GET_NEWS_IDS_LIST_SUCCESS: {
            return {
                ...state,
                isGettingNewsIds: false
            }
        }
        case GET_NEWS_LIST_REQUEST: {
            return {
                ...state,
                isGettingNewsList: true
            };
        }
        case GET_NEWS_LIST_SUCCESS: {
            return {
                ...state,
                isGettingNewsList: false,
                items: action.news
            };
        }
        default: {
            return state;
        }
    }
}