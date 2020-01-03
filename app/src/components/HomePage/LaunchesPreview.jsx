import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";

import {
  fetchLaunchList,
  fetchNextTen,
  fetchPrevTen
} from "../../store/action";

import Launch from "../Launch";
import Search from "../Search";
import Loading from "../Loading";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  summary: {
    padding: "15px"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function LaunchList() {
  const dispatch = useDispatch();
  const launches = useSelector(state => {
    return state.launchesReducer.launches;
  });

  const searchedLaunches = useSelector(
    state => state.launchesReducer.searchedLaunches
  );

  const { launchesLoading } = useSelector(state => ({
    launchesLoading: state.launchesReducer.loading
  }));

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchLaunchList());
  }, []);

  return (
    <>
      <Search searchType="launches" />
      <h2 style={{ textAlign: "center" }}>Past Launches</h2>
      {searchedLaunches && searchedLaunches.length > 0 ? (
        <>
          {launchesLoading ? (
            <Loading />
          ) : (
            <div className={classes.root}>
              {searchedLaunches.map(launch => (
                <Launch key={launch.flight_number} launch={launch} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {launchesLoading ? (
            <Loading />
          ) : (
            <LaunchContainer>
              {/* <div className={classes.buttonContainer}>
                <Button onClick={() => dispatch(fetchPrevTen())}>
                  Previous
                </Button>
                <Button onClick={() => dispatch(fetchNextTen())}>Next</Button>
              </div> */}
              <div className={classes.root}>
                {launches.map(
                  (launch, index) =>
                    index <= 3 && (
                      <Launch key={launch.flight_number} launch={launch} />
                    )
                )}
              </div>
              {/* <div className={classes.buttonContainer}>
                <Button onClick={() => dispatch(fetchPrevTen())}>
                  Previous
                </Button>
                <Button onClick={() => dispatch(fetchNextTen())}>Next</Button>
              </div> */}
            </LaunchContainer>
          )}
        </>
      )}
    </>
  );
}

const LaunchContainer = styled.div`
  margin: 50px 100px;
`;

export default LaunchList;
