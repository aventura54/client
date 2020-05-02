import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";

import "./FinalizarAssinaturaPage.scss";

const renderContent = () => (
  <div className="section-content">
    <Typography className="title" variant="h1">
      assinatura realizada com sucesso! obrigado :)
    </Typography>
    <Typography className="content" variant="body">
      Sua assinatura foi realizada com sucesso e você já pode desfrutar de todos
      os nossos serviços. Nosso mais sincero obrigado e bom proveito!
    </Typography>
  </div>
);

const renderButtons = () => (
  <div className="section-buttons">
    <Link to="/feed" style={{ textDecoration: "none" }}>
      <Button
        className="button button-next"
        color="primary"
        variant="contained"
      >
        IR PARA O FEED
      </Button>
    </Link>
  </div>
);

const FinalizarAssinaturaPage = () => {
  return (
    <>
      <LinearProgress variant="buffer" value={100} valueBuffer={100} />
      <Container>
        <Grid
          direction="column"
          justify="space-evenly"
          className="assinatura-container"
          container
        >
          {renderContent()}
          {renderButtons()}
        </Grid>
      </Container>
    </>
  );
};

export default FinalizarAssinaturaPage;
