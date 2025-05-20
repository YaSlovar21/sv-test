import {
  SOME_ORDER_VIEWING,
  SOME_ORDER_VIEWING_CLEAR,
} from "../actions/modal-order.js";

const initialState = {
  viewingOrder: undefined,
}

export const modalOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOME_ORDER_VIEWING: {
      return {
        ...state,
        viewingOrder: action.order,
      };
    }
    case SOME_ORDER_VIEWING_CLEAR: {
      return {
        ...state,
        viewingOrder: undefined,
      };
    }
    default: {
      return state;
    }
  }
};
