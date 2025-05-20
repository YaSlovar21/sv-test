import { filesUploadRequest, getOrdersRequest, postOrderRequest, putCommentRequest } from "../../utils/hexie-api";


//Получение списка заявок от API. Приватно
export const GET_ORDERS_LIST_SUCCESS = 'GET_ORDERS_LIST_SUCCESS';
export const GET_ORDERS_LIST_ERROR = 'GET_ORDERS_LIST_ERROR';
export const GET_ORDERS_LIST_REQUEST = 'GET_ORDERS_LIST_REQUEST';

//Добавление заявки
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_ERROR = 'POST_ORDER_ERROR';
export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';

export const MODAL_ORDER_ADD_FORM_OPEN = 'MODAL_ORDER_ADD_FORM_OPEN';
export const MODAL_ORDER_ADD_FORM_CLOSE = 'MODAL_ORDER_ADD_FORM_CLOSE';


//добавился комментарий
export const SOME_COMMENT_ADD_REQUEST = 'SOME_COMMENT_ADD_REQUEST';
export const SOME_COMMENT_ADDED = 'SOME_COMMENT_ADDED';
export const SOME_COMMENT_ADD_ERROR = 'SOME_COMMENT_ADD_ERROR';

//загружается и добавился файл 
export const SOME_FILES_ADD_REQUEST = 'SOME_FILES_ADD_REQUEST';
export const SOME_FILES_ADDED = 'SOME_FILES_ADDED';
export const SOME_FILES_ADD_ERROR = 'SOME_FILES_ADD_ERROR';

export const getOrders = () => (dispatch) => { 
    dispatch({
        type: GET_ORDERS_LIST_REQUEST
    });
    getOrdersRequest()
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: GET_ORDERS_LIST_SUCCESS,
                    orders: res.map(item => ({...item, 
                        comments: JSON.parse(item.comments),
                        files: JSON.parse(item.files),
                    }))
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_ORDERS_LIST_ERROR,
            })
    });
}

export const postOrder= (orderText, clientId) => (dispatch) => {
    dispatch({
        type: POST_ORDER_REQUEST
    });
    postOrderRequest(clientId, orderText)
        .then(res => {
            if (res) {
                console.log(res); //получаем массив заявок по clientId
                dispatch({
                    type: POST_ORDER_SUCCESS,
                    ordersForClientId: res,
                    clientId: clientId
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: POST_ORDER_ERROR,
            })
        });
}

export const putComment = (commentText, orderId) => (dispatch) => {
    dispatch({
        type: SOME_COMMENT_ADD_REQUEST
    });
    putCommentRequest(commentText, orderId)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: SOME_COMMENT_ADDED,
                    newOrderObj: res
                })
            } else {
                Promise.reject(`Не получилось добавить комментарий к заявке. Ошибка ${res.status}`);
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: SOME_COMMENT_ADD_ERROR,
            })
        });
}

export const filesLoad = (orderId, formData) => (dispatch) => {
    dispatch({
        type: SOME_FILES_ADD_REQUEST
    });
    filesUploadRequest(orderId, formData)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: SOME_FILES_ADDED,
                    newOrderObj: res
                })
            } else {
                Promise.reject(`Не получилось добавить файлы к заявке. Ошибка ${res.status}`);
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: SOME_FILES_ADD_ERROR,
            })
        });
}