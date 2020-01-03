import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import { fetchLaunchList, fetchNextTen, fetchPrevTen } from "../store/action";

import Launch from "./Launch";
import Search from "./Search";

function LaunchList() {
  const dispatch = useDispatch();
  const launches = useSelector(state => {
    return state.launchesReducer.launches;
  });
  const searchedLaunches = useSelector(state => {
    return state.launchesReducer.searchedLaunches;
  });

  useEffect(() => {
    dispatch(fetchLaunchList());
  }, []);

  return (
    <>
      <Search searchType="launches" />
      {
        searchedLaunches && searchedLaunches.length > 0 ? (
          <div style={{ marginTop: "50px" }}>
            {searchedLaunches.map(launch => (
              <Launch key={launch.flight_number} launch={launch} />
            ))}
          </div>
        ) : (
            <div style={{ marginTop: "50px" }}>
              {launches.map(launch => (
                <Launch key={launch.flight_number} launch={launch} />
              ))}
              <Button onClick={() => dispatch(fetchPrevTen())}>Previous 10</Button>
              <Button onClick={() => dispatch(fetchNextTen())}>Next 10</Button>
            </div>
          )
      }
    </>
  );
}

export default LaunchList;
