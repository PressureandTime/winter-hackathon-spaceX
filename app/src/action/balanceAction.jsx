export function loading () {
	return {
		type: 'LOADING',
	};
}

export function deposit () {
	return { type: 'DEPOSIT', payload: 1000 };
}

export function depositAsync () {

	return (dispatch) => {
        dispatch(loading())
		setTimeout(() => {
			dispatch(deposit());
		}, 3000);
	};
}
