import React from "react";
import { Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Switch>
        <HomePage />
      </Switch>
    </div>
  );
};

export default App;
