import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Slider,
  Button,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import "./Slider-page.scss";

const QuantoInvestir = () => {
  const valorInvestimentos = localStorage.getItem("valor");

  const [total, setTotal] = React.useState(valorInvestimentos);
  const [poup, setPoup] = React.useState(total / 2);
  const [invest, setInvest] = React.useState(total / 2);

  const renderIcon = () => (
    <div className="section-icon">
      <Link to="/organizacao" style={{ textDecoration: "none", width: "100%" }}>
        <BackIcon className="back-icon" />
      </Link>
    </div>
  );

  const handleChange = (event, newValue) => {
    setPoup(newValue);
    setInvest(total - newValue);
  };

  const renderContent = () => (
    <div className="section-content">
      <Typography className="title" variant="h2">
        como você quer distribuir seus R$ {valorInvestimentos}?
      </Typography>

      <Grid container direction="row">
        <Grid item xs={11}>
          <Typography
            color="primary"
            variant="h5"
            id="poupar-slider"
            gutterBottom
          >
            Poupar
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography id="investir-slider" variant="h5" gutterBottom>
            Investir
          </Typography>
        </Grid>
      </Grid>
      <Slider
        defaultValue={valorInvestimentos / 2}
        max={valorInvestimentos}
        step={10}
        onChange={handleChange}
      />
      <Grid container direction="row">
        <Grid item xs={11}>
          <Typography
            color="primary"
            id="discrete-slider"
            gutterBottom
            variant="h5"
          >
            R$ {poup}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography id="invest-slider-value" variant="h5" gutterBottom>
            R$ {invest}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );

  const renderButtons = () => (
    <div className="section-buttons">
      <Link to="/organizacao" style={{ textDecoration: "none" }}>
        <Button
          className="button button-exit"
          color="secondary"
          variant="contained"
        >
          Agora não
        </Button>
      </Link>
      <Link to="/planos" style={{ textDecoration: "none" }}>
        <Button
          className="button button-next"
          color="primary"
          variant="contained"
        >
          Vamos lá
        </Button>
      </Link>
    </div>
  );
  return (
    <div>
      <>
        <LinearProgress variant="buffer" value={51} valueBuffer={100} />
        <Container>
          <Grid
            direction="column"
            justify="space-evenly"
            className="organizacao-container"
            container
          >
            {renderIcon()}
            {renderContent()}
            {renderButtons()}
          </Grid>
        </Container>
      </>
    </div>
  );
};

export default QuantoInvestir;
