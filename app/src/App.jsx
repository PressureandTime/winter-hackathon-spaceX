import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, grey, blue } from "@material-ui/core/colors";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import LaunchList from "./components/LaunchList";
import RocketList from "./components/Rockets/RocketList";

const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [darkMode, setDarkMode] = useState(setTimeout(prefersDarkMode, 1000));

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: darkMode ? grey[900] : blueGrey[900]
			},
			secondary: {
				main: darkMode ? blue.A100 : blue.A400
			},
			background: {
				default: darkMode ? "#121212" : grey[50]
			},
			type: darkMode ? "dark" : "light"
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Switch>
				<Route path="/launches" component={LaunchList} />
				<Route path="/rockets" component={RocketList} />
				<Route exact path="/" component={HomePage} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
