import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import "./QuantoInvestir.scss";

const QuantoInvestir = () => {
  const [valueInput, setValueInput] = React.useState("");

  const setLocal = (value) => {
    setValueInput(value);
    localStorage.setItem("valor", value);
  };

  const renderIcon = () => (
    <div className="section-icon">
      <Link to="/organizacao" style={{ textDecoration: "none", width: "100%" }}>
        <BackIcon className="back-icon" />
      </Link>
    </div>
  );

  const renderContent = () => (
    <div className="section-content">
      <Typography className="title" variant="h2">
        quanto você quer investir?
      </Typography>
      <div className="input-container">
        <TextField
          value={valueInput}
          onChange={(e) => setLocal(e.target.value)}
          fullWidth
          autoFocus
          type="number"
          min={0}
          id="valor-investimento"
          label="Valor (R$)"
        />
      </div>
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
      <Link to="/slider-investimento" style={{ textDecoration: "none" }}>
        <Button
          disabled={valueInput ? false : true}
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
