import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory, fetchOneLaunch } from "../store/action";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "40%",
    height: 300,
    margin: "5% auto",
    fontSize: 24
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 34
  },
  pos: {
    marginBottom: 12
  },
  layout: {
    display: "flex",
    flexDirection: "row nowrap"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row nowrap",
    justifyContent: "space-around",
    marginTop: "10%"
  },
  imgSizing: {
    width: "100%",
    margin: "1% auto"
  }
});

function History() {
  const dispatch = useDispatch();
  const history = useSelector(state => state.historyReducer.history);

  const classes = useStyles();

  const {
    id,
    title,
    event_date_utc,
    flight_number,
    details,
    links = {}
  } = history;

  const picsArr = useSelector(state => {
    return state.launchesReducer.launch.links;
  });

  picsArr && console.log(`Launches: `, picsArr.flickr_images);

  useEffect(() => {
    dispatch(fetchHistory(1));
    dispatch(fetchOneLaunch(65));
  }, []);

  console.log(`History: `, history);
  return (
    <div className={classes.layout}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography className={classes.pos} color="textSecondary">
            On{" "}
            {event_date_utc &&
              event_date_utc.replace("T", " at ").replace("Z", "")}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Flight Number: {flight_number}
          </Typography>
          <Typography variant="body2" component="p">
            {details}
          </Typography>
        </CardContent>
        {/* <CardActions className={classes.buttonContainer}>
          <Button size="small" onClick={() => }>
            Article
          </Button>
          <Button size="small" onClick={links.wikipedia}>
            Wikipedia
          </Button>
        </CardActions> */}
      </Card>
      <Card className={classes.card} variant="outlined">
        {picsArr &&
          picsArr.flickr_images.map(pic => (
            <div>
              <img className={classes.imgSizing} src={pic} alt="flickr" />
            </div>
          ))}
      </Card>
    </div>
  );
}

export default History;
