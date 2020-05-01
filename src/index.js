import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./index.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5AC1AC",
      contrastText: "#fff",
    },
    secondary: {
      main: "#695F5F",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiAppBar: {},
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
