import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory, fetchOneLaunch } from "../../store/action";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
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
  },
  card: {
    minWidth: "450px",
    maxWidth: "450px",
    height: 275,
    fontSize: 18,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  },
  layout: {
    display: "flex",
    flexDirection: "row wrap",
    maxWidth: "1250px",
    margin: "0 auto",
    flexWrap: "wrap"
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row nowrap",
    justifyContent: "space-around",
    marginTop: "10%"
  },
  aTags: {
    textDecoration: "none",
    fontSize: 12,
    cursor: "pointer",
    color: "white"
  },
  imgSizing: {
    maxWidth: "100%",
    minWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%"
  },
  details: {
    overflow: "auto",
    height: 60
  }
});

function History() {
  const dispatch = useDispatch();
  const history = useSelector(state => state.historyReducer.history);

  const classes = useStyles();

  const picsArr = useSelector(state => {
    return state.launchesReducer.launch;
  });

  console.log(picsArr);

  const { launchesLoading } = useSelector(state => ({
    launchesLoading: state.launchesReducer.loading
  }));

  useEffect(() => {
    dispatch(fetchHistory());
    dispatch(fetchOneLaunch(65));
  }, []);
  if (Object.entries(picsArr).length === 0) {
    return <h1>Loading</h1>;
  }
  return (
    // <h1>Why</h1>
    <div className={classes.layout}>
      {picsArr.links.flickr_images.length > 0 && (
        <div className={classes.cardContainer}>
          <Carousel>
            {picsArr.links.flickr_images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={"Launch"}
                className={classes.card}
              />
            ))}
          </Carousel>
        </div>
      )}
      {history.length && (
        <div className={classes.cardContainer}>
          <Carousel>
            {history.length !== 0 &&
              history.map((el, index) => {
                return (
                  <Card className={classes.card} variant="outlined" key={index}>
                    <CardContent>
                      <Typography className={classes.pos} color="textSecondary">
                        On
                        {el.event_date_utc &&
                          el.event_date_utc
                            .replace("T", " at ")
                            .replace("Z", "")}
                      </Typography>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {el.title}
                      </Typography>
                      <div className={classes.details}>
                        <Typography variant="body2" component="p">
                          {el.details}
                        </Typography>
                      </div>
                      <div className={classes.linkContainer}>
                        <a
                          href={el.links.article}
                          target="_blank"
                          className={classes.aTags}
                        >
                          Read More
                        </a>
                        <a
                          href={el.links.wikipedia}
                          target="_blank"
                          className={classes.aTags}
                        >
                          Wiki
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default History;
