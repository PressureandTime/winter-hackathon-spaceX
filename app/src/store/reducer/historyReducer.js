import {
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_START,
  FETCH_HISTORY_FAILURE
} from '../action';

const initialState = {
  history: {},
  error: '',
  loading: false
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORY_START:
      return { ...state, loading: true };

    case FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
        loading: false
      };
    case FETCH_HISTORY_FAILURE:
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default historyReducer;
