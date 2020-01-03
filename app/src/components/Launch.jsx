import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    width: "100%",
    maxWidth: 300,
    margin: "10px",
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
  }
});

function Launch({ launch, history }) {
  const classes = useStyles();

  const {
    mission_name,
    launch_year,
    launch_success,
    details,
    flight_number,
    links
  } = launch;

  return (
    <>
      <Card
        className={classes.card}
        onClick={() => history.push(`/launch/${flight_number}`)}
      >
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={links.mission_patch_small}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {mission_name} ({launch_year})
            </Typography>
            <div className={classes.status}>
              <Typography component="p">Status:</Typography>
              <StatusImg fill={launch_success ? "green" : "red"}></StatusImg>
            </div>
            <div className={classes.details}>
              <Typography variant="body2" color="textSecondary" component="p">
                {details}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.bottomRow}>
          <Button
            size="small"
            color="inherit"
            onClick={() => history.push(`/launch/${flight_number}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

const StatusImg = styled.div`
  height: 20px;
  margin-left: 10px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid ${({ fill }) => fill};
  background-color: ${({ fill }) => fill};
`;

export default withRouter(Launch);
