import {
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_START,
  FETCH_HISTORY_FAILURE
} from "../action";

const initialState = {
  history: [],
  error: ""
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORY_START:
      return { ...state };

    case FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload
      };
    case FETCH_HISTORY_FAILURE:
      return {
        error: action.payload
      };
    default:
      return state;
  }
};

export default historyReducer;
