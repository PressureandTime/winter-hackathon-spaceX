import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneLaunch } from "../store/action";
import spacexPlaceholder from "../img/spacexPlaceholder.png";

import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "100%",
    maxWidth: 550,
    margin: "25px auto 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between"
  },
  actionArea: {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  media: {
    height: 250,
    width: 250
  },
  bottomRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  details: {
    overflow: "auto",
    height: 80
  },
  status: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },
  div: {
    textAlign: "center"
  },
  title: {
    marginTop: "15px"
  },
  text: {
    marginTop: "20px"
  },
  imgSizing: {
    maxWidth: "100%",
    minWidth: "100%",
    minHeight: "100%",
    maxHeight: "450px"
  },
  cardContainer: {
    minWidth: "450px",
    maxWidth: "450px",
    height: 300,
    margin: "10% auto",
    marginTop: "10%",
    fontSize: 18,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%"
  }
});

const LaunchCard = ({ match }) => {
  const dispatch = useDispatch();
  const launch = useSelector((state) => state.launchesReducer.launch);
  const classes = useStyles();

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

  if (Object.entries(launch).length === 0) {
    return <p>LOADING</p>;
  }

  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
          <CardContent>
            {links.flickr_images.length === 0 && !links.mission_patch_small && (
              <img
                src={spacexPlaceholder}
                alt={"Rocket Launch with SpaceX Logo"}
              />
            )}

            {links.flickr_images.length === 0 && links.mission_patch_small && (
              <img
                src={links.mission_patch_small}
                alt={"Patch for " + mission_name}
              />
            )}

            {launch.links.flickr_images.length > 0 && (
              <div
                // className={classes.cardContainer}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Carousel>
                  {launch.links.flickr_images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={"Launch"}
                      style={{ height: "400px", width: "450px" }}
                      //   className={classes.imgSizing}
                    />
                  ))}
                </Carousel>
              </div>
            )}

            <Typography
              className={classes.title}
              gutterBottom
              variant="h3"
              component="h1"
            >
              {mission_name}
            </Typography>

            <Typography variant="h4" component="h2">
              {moment(launch_date_utc).format("MMMM Do YYYY, h:mm:ss a")}
            </Typography>

            <Typography className={classes.text} variant="h5" component="h3">
              The launch was a{" "}
              {launch_success ? `success!` : `miserable, disgusting failure!`}
            </Typography>

            {launch_site && (
              <Typography
                className={classes.text}
                variant="subtitle1"
                component="p"
              >
                LAUNCH SITE: {launch_site.site_name}
              </Typography>
            )}

            {rocket && (
              <>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  component="p"
                >
                  Rocket Name: {rocket.rocket_name}
                </Typography>
                <Typography
                  className={classes.text}
                  variant="subtitle1"
                  component="p"
                >
                  Rocket Type: {rocket.rocket_type}{" "}
                </Typography>
              </>
            )}

            {ships && ships.length > 0 && (
              <Typography
                className={classes.text}
                variant="subtitle1"
                component="p"
              >
                Ships: {ships.map((item, index) => `${item}, `)}
              </Typography>
            )}

            {details && (
              <Typography
                className={classes.text}
                variant="subtitle1"
                component="p"
              >
                Fun Fact: {details}.
              </Typography>
            )}

            {launch_failure_details && launch_failure_details.reason && (
              <Typography
                className={classes.text}
                variant="subtitle3"
                component="p"
              >
                The launch failed due to a {launch_failure_details.reason}.
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default LaunchCard;
