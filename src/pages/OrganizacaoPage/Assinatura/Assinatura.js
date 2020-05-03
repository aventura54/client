import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Divider,
  Icon,
  LinearProgress,
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";

import "./Assinatura.scss";

const Assinatura = () => {
  const renderIcon = () => (
    <div className="section-icon-planos">
      <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
        <BackIcon className="back-icon" />
      </Link>
    </div>
  );
  const [selecionado, setSelecionado] = React.useState(false);
  const renderContent = () => (
    <div className="section-content-planos">
      <Typography className="title" variant="h3">
        hora de escolher seu plano de assinatura!
      </Typography>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid xs={12} sm={12} md={4} className="grid-card">
            <div className="card">
              <Typography variant="h3">
                <strong>R$ 25,00</strong>
              </Typography>
              <Divider />
              <Typography variant="h5">
                <strong>Planilha de gastos</strong>
              </Typography>
              <Typography variant="h5">
                <strong>News letter</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Indicação de investimento pré-fixados</strong>
              </Typography>
              <Typography variant="h5" style={{ color: "#979797" }}>
                <strong>Indicação de ações</strong>
              </Typography>
              <Typography variant="h5" style={{ color: "#979797" }}>
                <strong>Consultoria financeira especializada</strong>
              </Typography>
              <Divider />
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>keyboard_arrow_right</Icon>}
              >
                Assinar
              </Button>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className="grid-card">
            <div className="card-selected">
              <div class="ribbon ribbon-top-right">
                <span>seu plano</span>
              </div>
              <Typography variant="h3">
                <strong>R$ 50,00</strong>
              </Typography>
              <Divider />
              <Typography variant="h5">
                <strong>Planilha de gastos</strong>
              </Typography>
              <Typography variant="h5">
                <strong>News letter</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Indicação de investimento pré-fixados</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Indicação de ações</strong>
              </Typography>
              <Typography variant="h5" style={{ color: "#979797" }}>
                <strong>Consultoria financeira especializada</strong>
              </Typography>
              <Divider />
              <Button
                variant="contained"
                color="primary"
                className={selecionado && `selected-assinatura`}
                endIcon={!selecionado && <Icon>keyboard_arrow_right</Icon>}
                onClick={() => setSelecionado(true)}
              >
                {selecionado ? `Selecionado!` : `Selecionar`}
              </Button>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className="grid-card">
            <div className="card">
              <Typography variant="h3">
                <strong>R$ 130,00</strong>
              </Typography>
              <Divider />
              <Typography variant="h5">
                <strong>Planilha de gastos</strong>
              </Typography>
              <Typography variant="h5">
                <strong>News letter</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Indicação de investimento pré-fixados</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Indicação de ações</strong>
              </Typography>
              <Typography variant="h5">
                <strong>Consultoria financeira especializada</strong>
              </Typography>
              <Divider />
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>keyboard_arrow_right</Icon>}
              >
                Assinar
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );

  const renderButtons = () => (
    <div className="section-buttons-planos">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          className="button button-exit"
          color="secondary"
          variant="contained"
        >
          Agora não
        </Button>
      </Link>
      <Link to="/assinatura" style={{ textDecoration: "none" }}>
        <Button
          className="button button-next"
          color="primary"
          disabled={!selecionado}
          variant="contained"
        >
          Próxima
        </Button>
      </Link>
    </div>
  );
  return (
    <>
      <LinearProgress variant="buffer" value={91} valueBuffer={100} />
      <Container>
        <Grid
          direction="column"
          justify="space-evenly"
          className="planos-container"
          container
        >
          {renderIcon()}
          {renderContent()}
          {renderButtons()}
        </Grid>
      </Container>
    </>
  );
};

export default Assinatura;
