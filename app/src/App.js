import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App (){
	return (
		<Router>
			<header className="App-header">
				<ul className="ul-style">
					<li className="li-style">
						<NavLink to="/" className="App-link">
							Home
						</NavLink>
					</li>
					<li className="li-style">
						<NavLink to="/about" className="App-link">
							About
						</NavLink>
					</li>
					<li className="li-style">
						<NavLink to="/whatever" className="App-link">
							Whatever
						</NavLink>
					</li>
				</ul>
				<Route path="/" exact component={HomePage} />
			</header>
		</Router>
	);
}

export default App;
