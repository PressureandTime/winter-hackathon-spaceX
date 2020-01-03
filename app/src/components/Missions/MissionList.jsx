import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMissionsList } from "../../store/action/index";

import Mission from "./Mission";

function MissionList() {
	const dispatch = useDispatch();
	const missions = useSelector(state => {
		return state.missionsReducer.missions;
	});
	useEffect(() => {
		dispatch(fetchMissionsList());
	}, []);
	return (
		<div style={{ marginTop: "50px" }}>
			{missions.map(mission => (
				<Mission key={mission.mission_id} mission={mission} />
			))}
		</div>
	);
}

export default MissionList;
