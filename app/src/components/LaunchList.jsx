import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

import { fetchLaunchList, fetchNextTen, fetchPrevTen } from '../store/action';

import Launch from './Launch';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  summary: {
    padding: '15px'
  }
}));

function LaunchList() {
  const dispatch = useDispatch();
  const launches = useSelector(state => {
    return state.launchesReducer.launches;
  });

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchLaunchList());
  }, []);

  return (
    <>
      <LaunchContainer>
        <h2>Launches</h2>
        <div className={classes.root}>
          {launches.map(launch => (
            <Launch key={launch.flight_number} launch={launch} />
          ))}
        </div>
        <Button onClick={() => dispatch(fetchPrevTen())}>Previous</Button>
        <Button onClick={() => dispatch(fetchNextTen())}>Next</Button>
      </LaunchContainer>
    </>
  );
}

const LaunchContainer = styled.div`
  margin: 50px 100px;
  h2 {
    text-align: center;
  }
`;

export default LaunchList;
