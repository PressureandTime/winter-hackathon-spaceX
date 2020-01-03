import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import {LaunchListContainer} from './LaunchListStyles'

import { fetchLaunchList, fetchNextTen, fetchPrevTen } from "../store/action";

import Launch from "./Launch";

function LaunchList() {
  const dispatch = useDispatch();
  const launches = useSelector(state => {
    return state.launchesReducer.launches;
  });

  useEffect(() => {
    dispatch(fetchLaunchList());
  }, []);

  return (
    <>
      <LaunchListContainer>
        {launches.map(launch => (
          <Launch key={launch.flight_number} launch={launch} />
        ))}
        <Button onClick={() => dispatch(fetchPrevTen())}>Previous 10</Button>
        <Button onClick={() => dispatch(fetchNextTen())}>Next 10</Button>
      </LaunchListContainer>
    </>
  );
}

export default LaunchList;
