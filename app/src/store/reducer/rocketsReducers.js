import {
	FETCH_ROCKETS_SUCCESS,
	FETCH_ROCKETS_START,
	FETCH_ROCKETS_FAILURE,
	FETCH_SEARCH_FAILURE_R,
	FETCH_SEARCH_START_R,
	FETCH_SEARCH_SUCCESS_R
} from "../action";

const initialState = {
	rockets: [],
	error: ""
};

const rocketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ROCKETS_START:
			return { ...state };

		case FETCH_ROCKETS_SUCCESS:
			return {
				...state,
				rockets: action.payload
			};
		case FETCH_ROCKETS_FAILURE:
			return {
				error: action.payload
			};
		case FETCH_SEARCH_START_R:
			return { ...state, loading: true };
		case FETCH_SEARCH_SUCCESS_R:
			return { ...state, loading: false, searchedRockets: action.payload };
		case FETCH_SEARCH_FAILURE_R:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default rocketsReducer;
