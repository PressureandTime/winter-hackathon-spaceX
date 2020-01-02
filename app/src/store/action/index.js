import axios from "axios";

export function loading() {
	return {
		type: "LOADING"
	};
}

export const FETCH_LAUNCH_SUCCESS = "FETCH_LAUNCH_SUCCESS";
export const FETCH_LAUNCH_START = "FETCH_LAUNCH_START";
export const FETCH_LAUNCH_FAILURE = "FETCH_LAUNCH_FAILURE";

export const FETCH_ROCKETS_SUCCESS = "FETCH_ROCKETS_SUCCESS";
export const FETCH_ROCKETS_START = "FETCH_ROCKETS_START";
export const FETCH_ROCKETS_FAILURE = "FETCH_ROCKETS_FAILURE";

let pageCount = 0;

export const fetchLaunchList = () => dispatch => {
	dispatch({
		type: FETCH_LAUNCH_START
	});
	return axios
		.get(`https://api.spacexdata.com/v3/launches?limit=10`)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: FETCH_LAUNCH_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_LAUNCH_FAILURE
			});
		});
};

export const fetchPrevTen = () => dispatch => {
	if (pageCount === 0) {
		return;
	}
	pageCount -= 10;
	dispatch({
		type: FETCH_LAUNCH_START
	});
	return axios
		.get(`https://api.spacexdata.com/v3/launches?limit=10&offset=${pageCount}`)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: FETCH_LAUNCH_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_LAUNCH_FAILURE
			});
		});
};

export const fetchNextTen = () => dispatch => {
	dispatch({
		type: FETCH_LAUNCH_START
	});
	pageCount += 10;
	return axios
		.get(`https://api.spacexdata.com/v3/launches?limit=10&offset=${pageCount}`)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: FETCH_LAUNCH_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_LAUNCH_FAILURE
			});
		});
};

// ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS

export const fetchRocketsList = () => dispatch => {
	dispatch({
		type: FETCH_ROCKETS_START
	});
	return axios
		.get(`https://api.spacexdata.com/v3/rockets?limit=10`)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: FETCH_ROCKETS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_ROCKETS_FAILURE
			});
		});
};

export const fetchNextTenRockets = () => dispatch => {
	dispatch({
		type: FETCH_ROCKETS_START
	});
	pageCount += 10;
	return axios
		.get(`https://api.spacexdata.com/v3/rockets?limit=10&offset=${pageCount}`)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: FETCH_ROCKETS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_ROCKETS_FAILURE
			});
		});
};

export const fetchPrevTenRockets = () => dispatch => {
	if (pageCount === 0) {
		return;
	}
	pageCount -= 10;
	dispatch({
		type: FETCH_ROCKETS_START
	});
	return axios
		.get(`https://api.spacexdata.com/v3/rockets?limit=10&offset=${pageCount}`)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: FETCH_ROCKETS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: FETCH_ROCKETS_FAILURE
			});
		});
};
