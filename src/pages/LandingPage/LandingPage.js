import React from "react";

import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  ButtonBase,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <a href="#home">
              <img
                className="header-logo"
                src={`${process.env.PUBLIC_URL}/assets/images/logo_white.png`}
              />
            </a>
            <Button color="inherit" href="#how">
              como funciona?
            </Button>
            <Button color="inherit" href="#steps">
              Etapas
            </Button>
            <Button color="inherit" href="#contact">
              Contato
            </Button>
            <div style={{ flex: 1 }}></div>
            <Button variant="outlined" color="inherit">
              Crie sua conta
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <section id="home" style={{ position: "relative" }}>
        <img
          className="full-size"
          style={{ objectFit: "cover" }}
          src={`${process.env.PUBLIC_URL}/assets/images/banner.png`}
        />
        <div style={{ position: "absolute", right: "20%", top: "40%" }}>
          <Typography style={{ color: "#fff" }} variant="h2">
            <strong>Onganize</strong>
          </Typography>
          <Typography style={{ color: "#fff" }} variant="h2">
            <strong>Invista</strong>
          </Typography>
          <Typography color="primary" variant="h2">
            <strong>Prospere</strong>
          </Typography>
        </div>
      </section>
      <section id="how" className="full-size">
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <Typography className="title-how" variant="h2">
            <strong>como funciona?</strong>
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div>
              <Grid container>
                <Grid xs={12} sm={12} md={4} className="text-center how-grid">
                  <div>
                    <img
                      className="image-how"
                      style={{ objectFit: "scale-down" }}
                      src={`${process.env.PUBLIC_URL}/assets/images/calendario.png`}
                    />
                  </div>
                  <div className="how-text-content">
                    <Typography className="title-how" variant="h3">
                      <strong>Todos os meses</strong>
                    </Typography>
                    <Typography variant="h4">
                      Você paga uma mensalidade e recebe um pack de ações e
                      também a nossa revista virtual elaborada por
                      especialistas.
                    </Typography>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={4} className="text-center how-grid">
                  <div>
                    <img
                      className="image-how"
                      src={`${process.env.PUBLIC_URL}/assets/images/especialistas.png`}
                    />
                  </div>
                  <div className="how-text-content">
                    <Typography className="title-how" variant="h3">
                      <strong>Tenha domínio do seu lucro</strong>
                    </Typography>
                    <Typography variant="h4">
                      Receba consultoria de especialistas e decida como investir
                      seu dinheiro. Você decide!
                    </Typography>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={4} className="text-center how-grid">
                  <div>
                    <img
                      className="image-how"
                      src={`${process.env.PUBLIC_URL}/assets/images/poupar.png`}
                    />
                  </div>
                  <div className="how-text-content">
                    <Typography className="title-how" variant="h3">
                      <strong>Poupe ou invista</strong>
                    </Typography>
                    <Typography variant="h4">
                      Oferecemos as duas opções pra todos os perfis de
                      assinantes. Você pode poupar ou investir em ações.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </section>
      <section
        id="steps"
        className="full-size"
        style={{ backgroundColor: "#695F5F" }}
      >
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <Grid container>
            <Grid xs={12} sm={12} md={6} className="steps-left">
              <Typography variant="h2" style={{ color: "#fff" }}>
                <strong>
                  os{" "}
                  <Typography variant="span" color="primary">
                    melhores
                  </Typography>{" "}
                  investimentos ao seu dispor.
                </strong>
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={6} className="steps-right"></Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default LandingPage;
