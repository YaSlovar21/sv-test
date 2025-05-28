import { GET_NEWS_IDS_LIST_REQUEST, GET_NEW_BY_ID_SUCCESS, GET_NEWS_IDS_LIST_SUCCESS, GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS, GET_NEW_BY_ID_REQUEST } from "../actions/news";


const initialState = {
    isGettingNewsList: false, 
    isGettingNewsIds: false, 
    newsIds: [],
    news: {},
    newsIdsLoadingRequests: []
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
                isGettingNewsIds: false,
                newsIds: action.payload
            }
        }
        
        case GET_NEW_BY_ID_REQUEST: {
            return{
                ...state,
                newsIdsLoadingRequests: [...state.newsIdsLoadingRequests, action.payload.id]
            }
        }

        case GET_NEW_BY_ID_SUCCESS: {
            return{
                ...state,
                news: {
                    ...state.news,
                    [action.payload.id]: action.payload.newsItem
                },
                newsIdsLoadingRequests: state.newsIdsLoadingRequests.filter(i=> i!==action.payload.id)
            }
        }

        default: {
            return state;
        }
    }
}
