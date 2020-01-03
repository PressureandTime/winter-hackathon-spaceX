import axios from "axios";

export function loading() {
  return {
    type: "LOADING"
  };
}

export const FETCH_LAUNCH_SUCCESS = "FETCH_LAUNCH_SUCCESS";
export const FETCH_LAUNCH_START = "FETCH_LAUNCH_START";
export const FETCH_LAUNCH_FAILURE = "FETCH_LAUNCH_FAILURE";

export const FETCH_ONE_LAUNCH_START = "FETCH_ONE_LAUNCH_START";
export const FETCH_ONE_LAUNCH_SUCCESS = "FETCH_ONE_LAUNCH_SUCCESS";
export const FETCH_ONE_LAUNCH_FAILURE = "FETCH_ONE_LAUNCH_FAILURE";

export const FETCH_ROCKETS_SUCCESS = "FETCH_ROCKETS_SUCCESS";
export const FETCH_ROCKETS_START = "FETCH_ROCKETS_START";
export const FETCH_ROCKETS_FAILURE = "FETCH_ROCKETS_FAILURE";

export const FETCH_MISSIONS_SUCCESS = "FETCH_MISSIONS_SUCCESS";
export const FETCH_MISSIONS_START = "FETCH_MISSIONS_START";
export const FETCH_MISSIONS_FAILURE = "FETCH_MISSIONS_FAILURE";

let pageCount = 0;

// LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES

export const fetchLaunchList = () => (dispatch) => {
  dispatch({
    type: FETCH_LAUNCH_START
  });
  return axios
    .get(`https://api.spacexdata.com/v3/launches?limit=10`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_LAUNCH_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_LAUNCH_FAILURE
      });
    });
};

export const fetchPrevTen = () => (dispatch) => {
  if (pageCount === 0) {
    return;
  }
  pageCount -= 10;
  dispatch({
    type: FETCH_LAUNCH_START
  });
  return axios
    .get(`https://api.spacexdata.com/v3/launches?limit=10&offset=${pageCount}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_LAUNCH_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_LAUNCH_FAILURE
      });
    });
};

export const fetchNextTen = () => (dispatch) => {
  dispatch({
    type: FETCH_LAUNCH_START
  });
  pageCount += 10;
  return axios
    .get(`https://api.spacexdata.com/v3/launches?limit=10&offset=${pageCount}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_LAUNCH_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_LAUNCH_FAILURE
      });
    });
};

// ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS// ROCKETS

export const fetchRocketsList = () => (dispatch) => {
  dispatch({
    type: FETCH_ROCKETS_START
  });
  return axios
    .get(`https://api.spacexdata.com/v3/rockets?limit=10`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_ROCKETS_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_ROCKETS_FAILURE
      });
    });
};

export const fetchOneLaunch = (flight_number) => (dispatch) => {
  dispatch({
    type: FETCH_ONE_LAUNCH_START
  });

  return axios
    .get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
    .then((res) => {
      console.log(res, "tomato");
      dispatch({ type: FETCH_ONE_LAUNCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_ONE_LAUNCH_FAILURE, payload: err });
    });
};

export const fetchMissionsList = () => (dispatch) => {
  dispatch({
    type: FETCH_MISSIONS_START
  });
  return axios
    .get(`https://api.spacexdata.com/v3/missions?limit=10`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_MISSIONS_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_MISSIONS_FAILURE
      });
    });
};
