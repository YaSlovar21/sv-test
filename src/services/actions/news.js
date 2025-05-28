import { getNewByIdRequest, getNewsRequest } from "../../utils/hack-api";

export const GET_NEWS_IDS_LIST_SUCCESS = 'GET_NEWS_IDS_LIST_SUCCESS';
export const GET_NEWS_IDS_LIST_ERROR = 'GET_NEWS_IDS_LIST_ERROR';
export const GET_NEWS_IDS_LIST_REQUEST = 'GET_NEWS_IDS_LIST_REQUEST';

export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS';
export const GET_NEWS_LIST_ERROR = 'GET_NEWS_LIST_ERROR';
export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST';

export const GET_NEW_BY_ID_SUCCESS = 'GET_NEW_BY_ID_SUCCESS';
export const GET_NEW_BY_ID_ERROR = 'GET_NEW_BY_ID_ERROR';
export const GET_NEW_BY_ID_REQUEST = 'GET_NEW_BY_ID_REQUEST';

export const getNewsIds = () => (dispatch) => { 
    dispatch({
        type: GET_NEWS_IDS_LIST_REQUEST
    });
    getNewsRequest()
        .then((newsIds) => {
             dispatch({
                type: GET_NEWS_IDS_LIST_SUCCESS,
                payload: newsIds.slice(0,100),
            });
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_NEWS_IDS_LIST_ERROR,
            })
    });
}

export const getNewById = (id) => (dispatch) => {
    //получаем новость по id
    dispatch({
        type: GET_NEW_BY_ID_REQUEST,
        payload: id
    })
    getNewByIdRequest(id)
        .then((newsItem)=> {
            dispatch({
                type: GET_NEW_BY_ID_SUCCESS,
                payload: {
                    id,
                    newsItem
                }
            })
        })
}

