import { GET_COMMANDS_LIST_REQUEST, GET_COMMANDS_LIST_SUCCESS } from "../actions/commands";


const initialState = {
    isRequestingList: false,
    items: []
}

function commandsMapper(commArs) {
    return commArs.map(i => i);
}

export const commandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMANDS_LIST_REQUEST: {
            return {
                ...state,
                isRequestingList: true
            }
        }
        case GET_COMMANDS_LIST_SUCCESS: {
            return {
                ...state,
                items: commandsMapper(action.commands)
            }
        }
        default: {
            return state;
        }
    }
}