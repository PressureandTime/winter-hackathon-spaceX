import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOneLaunch } from "../store/action";

const LaunchCard = ({ match }) => {
  const dispatch = useDispatch();
  const launch = useSelector((state) => state.launchesReducer.launch);

  const {
    details,
    launch_date_utc,
    launch_failure_details,
    launch_site,
    launch_success,
    launch_year,
    links,
    mission_name,
    rocket,
    ships,
    upcoming
  } = launch;

  console.log(launch);

  useEffect(() => {
    dispatch(fetchOneLaunch(match.params.id));
  }, [match.params.id, dispatch]);

  return (
    <>
      {links.flickr_images.length === 0 && (
        <img src={links.mission_patch} alt={"Patch for " + mission_name} />
      )}
    </>
  );
};

export default LaunchCard;
