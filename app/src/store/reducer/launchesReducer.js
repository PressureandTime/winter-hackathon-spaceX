import {
  FETCH_LAUNCH_SUCCESS,
  FETCH_LAUNCH_START,
  FETCH_LAUNCH_FAILURE,
  FETCH_ONE_LAUNCH_FAILURE,
  FETCH_ONE_LAUNCH_START,
  FETCH_ONE_LAUNCH_SUCCESS,
  FETCH_SEARCH_START_L,
  FETCH_SEARCH_SUCCESS_L,
  FETCH_SEARCH_FAILURE_L
} from "../action";

const initialState = {
  launches: [],
  error: "",
  launch: {},
  loading: false
};

const launchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCH_START:
      return { ...state, loading: true };
    case FETCH_LAUNCH_SUCCESS:
      return {
        ...state,
        launches: action.payload,
        loading: false
      };
    case FETCH_LAUNCH_FAILURE:
      return {
        error: action.payload,
        loading: false
      };
    case FETCH_ONE_LAUNCH_START:
      return { ...state, loading: false };
    case FETCH_ONE_LAUNCH_SUCCESS:
      return { ...state, launch: action.payload, loading: false };
    case FETCH_ONE_LAUNCH_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_SEARCH_START_L:
      return { ...state, loading: true };
    case FETCH_SEARCH_SUCCESS_L:
      return { ...state, loading: false, searchedLaunches: action.payload };
    case FETCH_SEARCH_FAILURE_L:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default launchesReducer;
