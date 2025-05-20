import { GET_PLAYERS_LIST_REQUEST, GET_PLAYERS_LIST_SUCCESS } from "../actions/players";

const initialState = {
    isRequestingList: false,
    items: []
}

function playersMapper(plArs) {
    return plArs.map(i => i);
}

export const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLAYERS_LIST_REQUEST: {
            return {
                ...state,
                isRequestingList: true
            }
        }
        case GET_PLAYERS_LIST_SUCCESS: {
            return {
                ...state,
                items: playersMapper(action.players)
            }
        }
        default: {
            return state;
        }
    }
}