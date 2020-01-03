import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRocketsList } from "../../store/action/index";

import Rocket from "./Rocket";

function RocketList() {
	const dispatch = useDispatch();
	const rockets = useSelector(state => {
		return state.rocketsReducer.rockets;
	});
	useEffect(() => {
		dispatch(fetchRocketsList());
	}, []);
	return (
		<div style={{ marginTop: "50px" }}>
			{rockets.map(rocket => (
				<Rocket key={rocket.rocket_id} rocket={rocket} />
			))}
		</div>
	);
}

export default RocketList;
