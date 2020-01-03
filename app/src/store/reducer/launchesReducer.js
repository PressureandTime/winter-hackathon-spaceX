import {
	FETCH_LAUNCH_SUCCESS,
	FETCH_LAUNCH_START,
	FETCH_LAUNCH_FAILURE,
	FETCH_ONE_LAUNCH_FAILURE,
	FETCH_ONE_LAUNCH_START,
	FETCH_ONE_LAUNCH_SUCCESS
} from "../action";

const initialState = {
	launches: [],
	error: "",
	launch: {}
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
		case FETCH_ONE_LAUNCH_START:
			return { ...state };
		case FETCH_ONE_LAUNCH_SUCCESS:
			return { ...state, launch: action.payload };
		case FETCH_ONE_LAUNCH_FAILURE:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default launchesReducer;
