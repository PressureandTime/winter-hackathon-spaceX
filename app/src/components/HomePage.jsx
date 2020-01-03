import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from '../logo.png'

function HomePage() {
	return (
		<div>
			<img src={logo} alt="SpaceX" style={{width:400, display:'block', margin:'auto'}}/>
		</div>
	);
}

export default HomePage;
