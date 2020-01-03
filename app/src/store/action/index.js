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

export const FETCH_HISTORY_START = "FETCH_HISTORY_START";
export const FETCH_HISTORY_SUCCESS = "FETCH_HISTORY_SUCCESS";
export const FETCH_HISTORY_FAILURE = "FETCH_HISTORY_FAILURE";

export const FETCH_SEARCH_SUCCESS_L = "FETCH_SEARCH_SUCCESS_L";
export const FETCH_SEARCH_START_L = "FETCH_SEARCH_START_L";
export const FETCH_SEARCH_FAILURE_L = "FETCH_SEARCH_FAILURE_L";
export const FETCH_SEARCH_SUCCESS_M = "FETCH_SEARCH_SUCCESS_M";
export const FETCH_SEARCH_START_M = "FETCH_SEARCH_START_M";
export const FETCH_SEARCH_FAILURE_M = "FETCH_SEARCH_FAILURE_M";
export const FETCH_SEARCH_SUCCESS_R = "FETCH_SEARCH_SUCCESS_R";
export const FETCH_SEARCH_START_R = "FETCH_SEARCH_START_R";
export const FETCH_SEARCH_FAILURE_R = "FETCH_SEARCH_FAILURE_R";

let pageCount = 0;

// LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES // LAUNCHES

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

// export const fetchLaunchList = () => dispatch => {
//   dispatch({
//     type: FETCH_LAUNCH_START
//   });
//   return axios
//     .get(`https://api.spacexdata.com/v3/launches?limit=10`)
//     .then(res => {
//       console.log(res.data);
//       dispatch({
//         type: FETCH_LAUNCH_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({
//         type: FETCH_LAUNCH_FAILURE
//       });
//     });
// };

// export const fetchPrevTen = () => dispatch => {
//   if (pageCount === 0) {
//     return;
//   }
//   pageCount -= 10;
//   dispatch({
//     type: FETCH_LAUNCH_START
//   });
//   return axios
//     .get(`https://api.spacexdata.com/v3/launches?limit=10&offset=${pageCount}`)
//     .then(res => {
//       console.log(res.data);
//       dispatch({
//         type: FETCH_LAUNCH_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({
//         type: FETCH_LAUNCH_FAILURE
//       });
//     });
// };

// export const fetchNextTen = () => dispatch => {
//   dispatch({
//     type: FETCH_LAUNCH_START
//   });
//   pageCount += 10;
//   return axios
//     .get(`https://api.spacexdata.com/v3/launches?limit=10&offset=${pageCount}`)
//     .then(res => {
//       console.log(res.data);
//       dispatch({
//         type: FETCH_LAUNCH_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({
//         type: FETCH_LAUNCH_FAILURE
//       });
//     });
// };

// ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS // ROCKETS// ROCKETS

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

// MISSIONS // MISSIONS // MISSIONS // MISSIONS // MISSIONS // MISSIONS // MISSIONS // MISSIONS

// HISTORY // HISTORY // HISTORY // HISTORY // HISTORY // HISTORY // HISTORY // HISTORY

export const fetchHistory = () => dispatch => {
  dispatch({
    type: FETCH_HISTORY_START
  });

  return axios
    .get(`https://api.spacexdata.com/v3/history?limit=15`)
    .then(res => {
      dispatch({ type: FETCH_HISTORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_HISTORY_FAILURE, payload: err });
    });
};

export const fetchMissionsList = () => dispatch => {
  dispatch({
    type: FETCH_MISSIONS_START
  });
  return axios
    .get(`https://api.spacexdata.com/v3/missions?limit=10`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_MISSIONS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_MISSIONS_FAILURE
      });
    });
};

export const fetchOneLaunch = flight_number => dispatch => {
  dispatch({
    type: FETCH_ONE_LAUNCH_START
  });

  return axios
    .get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
    .then(res => {
      dispatch({ type: FETCH_ONE_LAUNCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ONE_LAUNCH_FAILURE, payload: err });
    });
};

export const search = (searchType, searchValue) => dispatch => {
  const initial = searchType.charAt(0).toUpperCase();
  const start = `FETCH_SEARCH_START_${initial}`;
  const success = `FETCH_SEARCH_SUCCESS_${initial}`;
  const failure = `FETCH_SEARCH_FAILURE_${initial}`;

  dispatch({
    type: start
  });

  return axios
    .get(`https://api.spacexdata.com/v3/${searchType}`)
    .then(res => {
      const value = searchValue.toLowerCase();
      let searchResults;
      if (initial === "M" || initial === "L") {
        searchResults = res.data.filter(obj => {
          const missionName = obj.mission_name.toLowerCase();
          return missionName.includes(value);
        });
      } else if (initial === "R") {
        searchResults = res.data.filter(obj => {
          const rocketName = obj.rocket_name.toLowerCase();
          return rocketName.includes(value);
        });
      }

      if (!searchValue) {
        dispatch({ type: success, payload: [] });
      } else {
        dispatch({ type: success, payload: searchResults });
      }
    })
    .catch(err => {
      dispatch({ type: failure, payload: err });
    });
};
