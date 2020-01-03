import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { fetchRocketsList } from '../../store/action/index';

import Rocket from './Rocket';
import Search from '../Search';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function RocketList() {
  const dispatch = useDispatch();
  const rockets = useSelector(state => {
    return state.rocketsReducer.rockets;
  });
  const classes = useStyles();

  const searchedRockets = useSelector(state => {
    return state.rocketsReducer.searchedRockets;
  });
  useEffect(() => {
    dispatch(fetchRocketsList());
  }, []);
  return (
    <>
      <Search searchType="rockets" />
      <div style={{ marginTop: '50px' }} className={classes.root}>
        {searchedRockets && searchedRockets.length > 0
          ? searchedRockets.map(rocket => (
              <Rocket key={rocket.rocket_id} rocket={rocket} />
            ))
          : rockets.map(rocket => (
              <Rocket key={rocket.rocket_id} rocket={rocket} />
            ))}
      </div>
    </>
  );
}

export default RocketList;
