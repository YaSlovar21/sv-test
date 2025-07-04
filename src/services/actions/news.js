import { getNewByIdRequest, getNewsIdsRequest } from "../../utils/hack-api";

export const GET_NEWS_IDS_LIST_SUCCESS = 'GET_NEWS_IDS_LIST_SUCCESS';
export const GET_NEWS_IDS_LIST_ERROR = 'GET_NEWS_IDS_LIST_ERROR';
export const GET_NEWS_IDS_LIST_REQUEST = 'GET_NEWS_IDS_LIST_REQUEST';

export const REFRESH_NEWS_IDS_LIST_SUCCESS = 'REFRESH_NEWS_IDS_LIST_SUCCESS';
export const REFRESH_NEWS_IDS_LIST_NOFRESH = 'REFRESH_NEWS_IDS_LIST_NOFRESH';
export const REFRESH_NEWS_IDS_LIST_ERROR = 'REFRESH_NEWS_IDS_LIST_ERROR';
export const REFRESH_NEWS_IDS_LIST_REQUEST = 'REFRESH_NEWS_IDS_LIST_REQUEST';

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
    getNewsIdsRequest()
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

export const refreshNews = (oldListIds) => async (dispatch) => {
    //oldListIds - массив id карточек в стейте на момент обновления
    //сообщаем, что пошел запрос на обновление новостей
    dispatch({
        type: REFRESH_NEWS_IDS_LIST_REQUEST,
    });
    try {
        // получаем id карточек
        const newsIds = await getNewsIdsRequest();
        // получаем массив id карточек, которых нет в стейте
        const idToLoad = newsIds.filter(id => !oldListIds.includes(id));

        if (!idToLoad.length) {
            //сделать диспатч новых новостей нет
            dispatch({type: REFRESH_NEWS_IDS_LIST_NOFRESH})
            console.log('новых новостей нет')
            return;
        }
        console.log('айдишники на догрузку после обновления',idToLoad);
        // получаем карточки по обновленным id
        // а если их тут не получать тогда как?
        // тогда как то логика будет строиться внутри компонента реакт, правильно ли это
        const newsItems = await Promise.all(idToLoad.map(i => getNewByIdRequest(i)));

        dispatch({
            type: REFRESH_NEWS_IDS_LIST_SUCCESS,
            payload: { 
                newsIds,
                newsItems
            }
        })
    } catch (e) {
        dispatch({
            type: REFRESH_NEWS_IDS_LIST_ERROR,
            payload: e
        })
    }

}

export const getNewsAll = () => async (dispatch, getState) => {
    const { newsIds } = getState().news;
    //если ids в стейте есть
    if (newsIds.length > 0 ) {
        //на будущее
    }
    //если ids в стейте нет
    try {
        dispatch({type: GET_NEWS_IDS_LIST_REQUEST});
        const ids = await getNewsIdsRequest();
        dispatch({
            type: GET_NEWS_IDS_LIST_SUCCESS,
            payload: ids
        });
        
        //получаем по id-шникам новости
        dispatch({ type: GET_NEWS_LIST_REQUEST });
        const news = await Promise.all(ids.map(i => getNewByIdRequest(i)));
        console.log(news);
        dispatch({
            type: GET_NEWS_LIST_SUCCESS,
            payload: news
        })
    } catch(e) {
        dispatch({
            type: GET_NEWS_LIST_ERROR,
            payload: e
        });
        dispatch({
            type: GET_NEWS_IDS_LIST_ERROR,
            payload: e
        })
    }
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
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_NEW_BY_ID_ERROR,
            })
        });
}

