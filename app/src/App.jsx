import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
