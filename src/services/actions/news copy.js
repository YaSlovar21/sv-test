import { getNewById, getNewsRequest } from "../../utils/hack-api";

export const GET_NEWS_IDS_LIST_SUCCESS = 'GET_NEWS_IDS_LIST_SUCCESS';
export const GET_NEWS_IDS_LIST_ERROR = 'GET_NEWS_IDS_LIST_ERROR';
export const GET_NEWS_IDS_LIST_REQUEST = 'GET_NEWS_IDS_LIST_REQUEST';

export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS';
export const GET_NEWS_LIST_ERROR = 'GET_NEWS_LIST_ERROR';
export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST';

export const getNewsObjects = () => (dispatch) => { 
    dispatch({
        type: GET_NEWS_IDS_LIST_REQUEST
    });
    getNewsRequest()
        .then((newsIds) => {
             dispatch({
                type: GET_NEWS_IDS_LIST_SUCCESS
            });
            dispatch({
                type: GET_NEWS_LIST_REQUEST
            });
            console.log('Полученные идентификаторы новостей', newsIds);
            
            return Promise.all(
                newsIds.slice(0,100).map(n=> getNewById(n))
            )
        })
        .then((results) => {
            console.log('Полученные объекты новостей', results);
            dispatch({
                type: GET_NEWS_LIST_SUCCESS,
                news: results
            })
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_NEWS_LIST_ERROR,
            })
    });
}