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
						<NavLink to="/deposit" className="App-link">
							Deposit
						</NavLink>
					</li>
					<li className="li-style">
						<NavLink to="/withdraw" className="App-link">
							Withdraw
						</NavLink>
					</li>
				</ul>
				<Route path="/" exact component={HomePage} />
			</header>
		</Router>
	);
}

export default App;
