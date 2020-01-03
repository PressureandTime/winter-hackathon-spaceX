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
      {links && links.flickr_images.length === 0 && (
        <img
          src={links.mission_patch_small}
          alt={"Patch for " + mission_name}
        />
      )}

      {links &&
        launch.links.flickr_images.length > 0 &&
        launch.links.flickr_images.map((img, index) => (
          <img key={index} src={img} alt={"Launch"} />
        ))}

      {mission_name && <h1>{mission_name}</h1>}
      {launch_date_utc && (
        <h2>{launch_date_utc.replace("T", " | ").replace("Z", "")}</h2>
      )}

      {launch_site && <h3>SITE: {launch_site.site_name}</h3>}

      {launch && (
        <h3>
          The launch was a{" "}
          {launch_success ? `success!` : `miserable, disgusting failure!`}
        </h3>
      )}

      {rocket && <p>Rocket: {rocket.rocket_name}</p>}

      {details && <p>Fun Fact: {details}.</p>}

      {launch_failure_details && launch_failure_details.reason && (
        <p>The launch failed due to a {launch_failure_details.reason}.</p>
      )}
    </>
  );
};

export default LaunchCard;
