import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, grey, blue } from "@material-ui/core/colors";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import LaunchList from "./components/LaunchList";
import RocketList from "./components/Rockets/RocketList";
import MissionList from "./components/Missions/MissionList";
import LaunchCard from "./components/LaunchCard.jsx";

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
        <Route path="/missions" component={MissionList} />
        <Route path="/rockets" component={RocketList} />
        <Route path="/launches" component={LaunchList} />
        <Route path="/launch/:id" component={LaunchCard} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
