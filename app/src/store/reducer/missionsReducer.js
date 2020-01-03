import {
	FETCH_MISSIONS_SUCCESS,
	FETCH_MISSIONS_START,
	FETCH_MISSIONS_FAILURE,
	FETCH_SEARCH_FAILURE_M,
	FETCH_SEARCH_START_M,
	FETCH_SEARCH_SUCCESS_M
} from "../action";

const initialState = {
	missions: [],
	error: ""
};

const missionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MISSIONS_START:
			return { ...state };

		case FETCH_MISSIONS_SUCCESS:
			return {
				...state,
				missions: action.payload
			};
		case FETCH_MISSIONS_FAILURE:
			return {
				error: action.payload
			};
		case FETCH_SEARCH_START_M:
			return { ...state, loading: true };
		case FETCH_SEARCH_SUCCESS_M:
			return { ...state, loading: false, searchedMissions: action.payload };
		case FETCH_SEARCH_FAILURE_M:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default missionsReducer;
