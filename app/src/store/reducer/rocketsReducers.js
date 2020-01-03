import {
	FETCH_ROCKETS_SUCCESS,
	FETCH_ROCKETS_START,
	FETCH_ROCKETS_FAILURE
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
		default:
			return state;
	}
};

export default rocketsReducer;
