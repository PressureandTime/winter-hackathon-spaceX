import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { fetchMissionsList } from "../../store/action/index";

import Mission from "./Mission";
import Search from "../Search";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));
function MissionList() {
  const dispatch = useDispatch();
  const missions = useSelector(state => {
    return state.missionsReducer.missions;
  });
  const searchedMissions = useSelector(state => {
    return state.missionsReducer.searchedMissions;
  });
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchMissionsList());
  }, []);
  return (
    <>
      <Search searchType="missions" />
      <div style={{ marginTop: "50px" }} className={classes.root}>
        {searchedMissions && searchedMissions.length > 0
          ? searchedMissions.map(mission => (
              <Mission key={mission.mission_id} mission={mission} />
            ))
          : missions.map(mission => (
              <Mission key={mission.mission_id} mission={mission} />
            ))}
      </div>
    </>
  );
}

export default MissionList;
