import { getPlayersRequest } from "../../utils/auth-api";

//Получение списка Участников от API
export const GET_PLAYERS_LIST_SUCCESS = 'GET_PLAYERS_LIST_SUCCESS';
export const GET_PLAYERS_LIST_ERROR = 'GET_PLAYERS_LIST_ERROR';
export const GET_PLAYERS_LIST_REQUEST = 'GET_PLAYERS_LIST_REQUEST';


export const getPlayers = (hachTextId) => (dispatch) => { 
    dispatch({
        type: GET_PLAYERS_LIST_REQUEST
    });
    getPlayersRequest(hachTextId)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: GET_PLAYERS_LIST_SUCCESS,
                    players: res
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_PLAYERS_LIST_ERROR,
            })
    });
}
