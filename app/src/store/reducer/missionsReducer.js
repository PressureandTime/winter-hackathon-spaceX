import {
	FETCH_MISSIONS_SUCCESS,
	FETCH_MISSIONS_START,
	FETCH_MISSIONS_FAILURE
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
		default:
			return state;
	}
};

export default missionsReducer;
