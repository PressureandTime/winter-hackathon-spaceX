import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function Rocket({ rocket }) {
  const classes = useStyles();

  const { rocket_name, stages, first_flight, country, description } = rocket;
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{rocket_name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div>
              <p>Date of first flight:{first_flight}</p>
              <p>Stages:{stages}</p>
              <p>Country:{country}</p>
              <p>{description}</p>
            </div>
            <Button>Details</Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default Rocket;
