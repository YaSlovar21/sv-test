import { GET_NEWS_IDS_LIST_REQUEST, GET_NEW_BY_ID_SUCCESS, GET_NEWS_IDS_LIST_SUCCESS, GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS, GET_NEW_BY_ID_REQUEST, REFRESH_NEWS_IDS_LIST_SUCCESS, REFRESH_NEWS_IDS_LIST_REQUEST, REFRESH_NEWS_IDS_LIST_NOFRESH } from "../actions/news";


const initialState = { 
    isGettingNewsIds: false, 
    isGettingPartOfNews: false,
    isNewsRefreshing: false,
    newsIds: [], //id-шки 100 новостей
    news: {}, //новости (вначале подружаем 20 шт.)
    newsIdsLoadingRequests: [] //какие новости подгружаются
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        /* получение спика id новостей */
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

        /* получение карточек новостей в виде массива */
        case GET_NEWS_LIST_REQUEST: {
            return {
                ...state,
                isGettingPartOfNews: true
            }
        }

        case GET_NEWS_LIST_SUCCESS: {
            const cards = action.payload;

            const newsToAdd = cards.reduce((acc,newsItem) => ({
                ...acc,
                [newsItem.id]: newsItem
            }), {})

            return {
                ...state,
                news: {
                    ...state.news,
                    ...newsToAdd
                },
                isGettingPartOfNews: false,
            }
        }
        
        case REFRESH_NEWS_IDS_LIST_REQUEST: {
            return {
                ...state,
                isNewsRefreshing: true
            }
        }
        case REFRESH_NEWS_IDS_LIST_NOFRESH: {
            return {
                ...state,
                isNewsRefreshing: false
            }
        }

        /* обновление списка id новостей */
        case REFRESH_NEWS_IDS_LIST_SUCCESS: {
            const {newsIds, newsItems} = action.payload;
            console.log(newsIds, newsItems);
            //отсекаем id, которые устарели (не попали в 100 последних объектов)
            const updatedNews = Object.keys(state.news).reduce((acc, id) => {
                console.log(id, typeof(id));
                console.log(newsIds.includes(Number(id)));
                if (newsIds.includes(Number(id))) {
                    acc[id] = state.news[id];
                }
                return acc;
            }, {});
            console.log(updatedNews);
            //новые объекты которые надо подшить в стейт
            const updatedNews1 = newsItems.reduce((acc, newsObj)=> {
                return {
                    ...acc,
                    [newsObj.id]: newsObj
                }
            }, {});

            return {
                ...state,
                newsIds: newsIds,
                isNewsRefreshing: false,
                news: {
                    ...updatedNews,
                    ...updatedNews1
                }
            }
        }

        /* получение новости с сервера по id  */
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
