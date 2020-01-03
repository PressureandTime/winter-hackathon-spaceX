import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMissionsList } from "../../store/action/index";

import Mission from "./Mission";
import Search from "../Search";

function MissionList() {
	const dispatch = useDispatch();
	const missions = useSelector(state => {
		return state.missionsReducer.missions;
	});
	useEffect(() => {
		dispatch(fetchMissionsList());
	}, []);
	return (
		<>
			<Search />
			<div style={{ marginTop: "50px" }}>
				{missions.map(mission => (
					<Mission key={mission.mission_id} mission={mission} />
				))}
			</div>
		</>
	);
}

export default MissionList;
