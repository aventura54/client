import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import OrganizacaoPage from "./pages/OrganizacaoPage/OrganizacaoPage";
import QuantoInvestir from "./pages/OrganizacaoPage/QuantoInvestir/QuantoInvestir";
import SliderPage from "./pages/OrganizacaoPage/Slider-page/Slider-page";

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
          <Route path="/quanto-investir" component={QuantoInvestir} />
          <Route path="/slider-investimento" component={SliderPage} />
          <Route path="/organizacao" component={OrganizacaoPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
