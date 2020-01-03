import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function Launch({ launch, history }) {
  const classes = useStyles();

  const {
    mission_name,
    launch_year,
    launch_date_utc,
    launch_success,
    details,
    flight_number
  } = launch;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{mission_name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div>
              <p>{launch_year}</p>
              <p>Mission: {launch_success ? `Success` : `Failure`}</p>
              <p>{details}</p>
            </div>
            <Button onClick={() => history.push(`/launch/${flight_number}`)}>
              Details
            </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withRouter(Launch);
