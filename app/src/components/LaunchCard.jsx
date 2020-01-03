import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "react-material-ui-carousel";

import { fetchOneLaunch } from "../store/action";

import spacexPlaceholder from "../img/spacexPlaceholder.png";

const LaunchCard = ({ match }) => {
  const dispatch = useDispatch();
  const launch = useSelector(state => state.launchesReducer.launch);

  const {
    details,
    launch_date_utc,
    launch_failure_details,
    launch_site,
    launch_success,
    links,
    mission_name,
    rocket,
    ships
  } = launch;

  console.log(launch);

  useEffect(() => {
    dispatch(fetchOneLaunch(match.params.id));
  }, [match.params.id, dispatch]);

  return (
    <>
      {links &&
        links.flickr_images.length === 0 &&
        !links.mission_patch_small && (
          <img src={spacexPlaceholder} alt={"Rocket Launch with SpaceX Logo"} />
        )}

      {links &&
        links.flickr_images.length === 0 &&
        links.mission_patch_small && (
          <img
            src={links.mission_patch_small}
            alt={"Patch for " + mission_name}
          />
        )}

      {links && launch.links.flickr_images.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Carousel>
            {launch.links.flickr_images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={"Launch"}
                style={{ height: "auto", width: "500px" }}
              />
            ))}
          </Carousel>
        </div>
      )}

      {mission_name && <h1>{mission_name}</h1>}

      <h2>{moment(launch_date_utc).format("MMMM Do YYYY, h:mm:ss a")}</h2>

      {launch_site && <h3>SITE: {launch_site.site_name}</h3>}

      <h3>
        The launch was a{" "}
        {launch_success ? `success!` : `miserable, disgusting failure!`}
      </h3>

      {rocket && (
        <>
          <p>Rocket Name: {rocket.rocket_name}</p>{" "}
          <p>Rocket Type: {rocket.rocket_type} </p>
        </>
      )}

      {ships && <h3>SHIPS: </h3>}
      {ships && ships.map((item, index) => <p key={index}>{item}</p>)}

      {details && <p>Fun Fact: {details}.</p>}

      {launch_failure_details && launch_failure_details.reason && (
        <p>The launch failed due to a {launch_failure_details.reason}.</p>
      )}
    </>
  );
};

export default LaunchCard;
