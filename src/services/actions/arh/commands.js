import { getCommandsRequest } from "../../utils/auth-api";

//Получение списка Участников от API
export const GET_COMMANDS_LIST_SUCCESS = 'GET_COMMANDS_LIST_SUCCESS';
export const GET_COMMANDS_LIST_ERROR = 'GET_COMMANDS_LIST_ERROR';
export const GET_COMMANDS_LIST_REQUEST = 'GET_COMMANDS_LIST_REQUEST';


export const getCommands = (hachTextId) => (dispatch) => { 
    
    dispatch({
        type: GET_COMMANDS_LIST_REQUEST
    });
    Promise.all([
        getCommandsRequest(hachTextId)
    ])
    .then((data) => {
        const res = data[0];
        console.log(res);
        dispatch({
            type: GET_COMMANDS_LIST_SUCCESS,
            commands: res
        })
    })
    .catch((err)=> {
        console.log(err);
        dispatch({
            type: GET_COMMANDS_LIST_ERROR,
        })
    })

}
