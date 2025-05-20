import { getCommandsRequest } from "../../utils/auth-api";

//Получение списка Участников от API
export const GET_COMMANDS_LIST_SUCCESS = 'GET_COMMANDS_LIST_SUCCESS';
export const GET_COMMANDS_LIST_ERROR = 'GET_COMMANDS_LIST_ERROR';
export const GET_COMMANDS_LIST_REQUEST = 'GET_COMMANDS_LIST_REQUEST';


export const getPlayers = (hachTextId) => (dispatch) => { 
    
    dispatch({
        type: GET_COMMANDS_LIST_REQUEST
    });

    getCommandsRequest(hachTextId)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: GET_COMMANDS_LIST_SUCCESS,
                    commands: res
                })
            } else {
                Promise.reject(`Не получилось список комманд. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_COMMANDS_LIST_ERROR,
            })
    });
}
