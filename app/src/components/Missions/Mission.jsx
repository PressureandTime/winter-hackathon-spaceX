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

function Mission({ mission }) {
  const classes = useStyles();

  const {
    mission_name,
    manufacturers,
    website,
    twitter,
    description
  } = mission;
  return (
    <>
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
              <p>Manufacturer: {manufacturers}</p>
              <p>{description}</p>
              <p>
                Visit the manufacurer's website{' '}
                <a href={website} target="_ ">
                  here.
                </a>
              </p>
              <p>
                Follow
                <a href={twitter} target="_ ">
                  {' '}
                  {manufacturers}
                </a>{' '}
                on Twitter
                <a href={twitter} target="_ ">
                  {' '}
                  HERE
                </a>
              </p>
            </div>
            <Button>Details</Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default Mission;
