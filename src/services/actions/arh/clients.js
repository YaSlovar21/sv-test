import { getClientsRequest, postClientRequest, postManagerOfClientRequest } from "../../utils/hexie-api";


//Получение списка клиентов от API. Приватно
export const GET_CLIENTS_LIST_SUCCESS = 'GET_CLIENTS_LIST_SUCCESS';
export const GET_CLIENTS_LIST_ERROR = 'GET_CLIENTS_LIST_ERROR';
export const GET_CLIENTS_LIST_REQUEST = 'GET_CLIENTS_LIST_REQUEST';

//добавление клмента
export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS';
export const POST_CLIENT_ERROR = 'POST_CLIENT_ERROR';
export const POST_CLIENT_REQUEST = 'POST_CLIENT_REQUEST';

export const MODAL_CLIENT_ADD_FORM_OPEN = 'MODAL_CLIENT_ADD_FORM_OPEN';
export const MODAL_CLIENT_ADD_FORM_CLOSE = 'MODAL_CLIENT_ADD_FORM_CLOSE';

//добавление менеджера к клиенту
export const POST_MANAGER_OF_CLIENT_SUCCESS = 'POST_MANAGER_OF_CLIENT_SUCCESS';
export const POST_MANAGER_OF_CLIENT_ERROR = 'POST_MANAGER_OF_CLIENT_ERROR';
export const POST_MANAGER_OF_CLIENT_REQUEST = 'POST_MANAGER_OF_CLIENT_REQUEST';


export const getClients = () => (dispatch) => { 
    dispatch({
        type: GET_CLIENTS_LIST_REQUEST
    });
    getClientsRequest()
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: GET_CLIENTS_LIST_SUCCESS,
                    clients: res
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_CLIENTS_LIST_ERROR,
            })
    });
}

export const postClient = ({nameOfClient, email, tel, note}) => (dispatch) => {
    dispatch({
        type: POST_CLIENT_REQUEST
    });
    postClientRequest(nameOfClient, email, tel, note)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: POST_CLIENT_SUCCESS,
                    clients: res //новый список клиентов, не забыть что надо промаппить изза managerOfClient
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: POST_CLIENT_ERROR,
            })
    });
}

export const postManagerOfClient = (clientId, {fio, email, tel, comment}) => (dispatch) => {
    dispatch({
        type: POST_MANAGER_OF_CLIENT_REQUEST,
        clientId
    });
    postManagerOfClientRequest(clientId, fio, email, tel, comment)
        .then(res=> {
            if(res) {
                dispatch({
                    type: POST_MANAGER_OF_CLIENT_SUCCESS,
                    client: res //клиент, которому был добавлен менеджер
                })
            } else {
                Promise.reject(`Не удалось добавить менеджера со стороны клиента. Ошибка ${res.status}`)
            }
        }).catch(e => {
            console.log(e);
            dispatch({
                type: POST_MANAGER_OF_CLIENT_ERROR,
            })
        });
}