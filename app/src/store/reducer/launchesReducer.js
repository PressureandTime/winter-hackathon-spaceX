import {
	FETCH_LAUNCH_SUCCESS,
	FETCH_LAUNCH_START,
	FETCH_LAUNCH_FAILURE
} from "../action";

const initialState = {
	launches: [],
	error: ""
};

const launchesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LAUNCH_START:
			return { ...state };

		case FETCH_LAUNCH_SUCCESS:
			return {
				...state,
				launches: action.payload
			};
		case FETCH_LAUNCH_FAILURE:
			return {
				error: action.payload
			};
		default:
			return state;
	}
};

export default launchesReducer;
