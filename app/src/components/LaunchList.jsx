import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLaunchList, fetchNextTen, fetchPrevTen } from "../store/action";

import Launch from "./Launch";

function LaunchList() {
  const dispatch = useDispatch();
  const launches = useSelector(state => {
    return state.launchesReducer.launches;
  });
  console.log(`LaunchList: launches: `, launches);
  useEffect(() => {
    dispatch(fetchLaunchList());
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {launches.map(launch => (
        <Launch keylaunch={launch} />
      ))}
      <button onClick={() => dispatch(fetchPrevTen())}>Previous 10</button>
      <button onClick={() => dispatch(fetchNextTen())}>Next 10</button>
    </div>
  );
}

export default LaunchList;
