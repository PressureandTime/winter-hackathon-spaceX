const initialState = {
	loan: false,
};

function LoanReducer (state = initialState, action) {
	switch (action.type) {
		case 'APPLY':
			return { loan: true };

		default:
			return state;
	}
}

export default LoanReducer;
