import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRocketsList } from "../../store/action/index";

import Rocket from "../Launch";

function RocketList() {
	const dispatch = useDispatch();
	const rockets = useSelector(state => {
		return state.rocketsReducer.rockets;
	});
	console.log(`Rocket List: rockets: `, rockets);
	useEffect(() => {
		dispatch(fetchRocketsList());
	}, []);
	return (
		<div style={{ marginTop: "50px" }}>
			{rockets.map(rocket => (
				<Rocket key={rocket} />
			))}
			{/* <button onClick={() => dispatch(fetchPrevTenRockets())}>
				Previous 10
			</button>
			<button onClick={() => dispatch(fetchNextTenRockets())}>Next 10</button> */}
		</div>
	);
}

export default RocketList;
