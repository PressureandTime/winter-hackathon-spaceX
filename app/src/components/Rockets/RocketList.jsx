import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRocketsList } from "../../store/action/index";

import Rocket from "./Rocket";
import Search from "../Search";

function RocketList() {
	const dispatch = useDispatch();
	const rockets = useSelector(state => {
		return state.rocketsReducer.rockets;
	});
	const searchedRockets = useSelector(state => {
		return state.rocketsReducer.searchedRockets;
	});
	useEffect(() => {
		dispatch(fetchRocketsList());
	}, []);
	return (
		<>
			<Search searchType="rockets" />
			<div style={{ marginTop: "50px" }}>
				{searchedRockets && searchedRockets.length > 0 ? searchedRockets.map(rocket => (
					<Rocket key={rocket.rocket_id} rocket={rocket} />
				)) : rockets.map(rocket => (
					<Rocket key={rocket.rocket_id} rocket={rocket} />
				))}
			</div>
		</>
	);
}

export default RocketList;
