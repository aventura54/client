import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
