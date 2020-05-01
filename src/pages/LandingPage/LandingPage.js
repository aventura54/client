import React from "react";

import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Divider,
  Icon,
} from "@material-ui/core";

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
            <Button color="inherit" href="#plans">
              Planos
            </Button>
            <Button color="inherit" href="#start">
              Começar
            </Button>
            <div style={{ flex: 1 }}></div>
            <Button variant="outlined" color="inherit">
              Crie sua conta
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <section id="home" className="full-size" style={{ position: "relative" }}>
        <img
          style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          src={`${process.env.PUBLIC_URL}/assets/images/banner.png`}
        />
        <div style={{ position: "absolute", width: "100%", top: "40%" }}>
          <Container style={{ textAlign: "right" }}>
            <Typography style={{ color: "#fff" }} variant="h2">
              <strong>Onganize</strong>
            </Typography>
            <Typography style={{ color: "#fff" }} variant="h2">
              <strong>Invista</strong>
            </Typography>
            <Typography color="primary" variant="h2">
              <strong>Prospere</strong>
            </Typography>
          </Container>
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
        <Container
          style={{ display: "flex", flex: 1, flexDirection: "column" }}
        >
          <Grid container style={{ flex: 1 }}>
            <Grid xs={12} sm={12} md={4} className="steps-left">
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
            <Grid
              xs={12}
              sm={12}
              md={8}
              className="steps-right"
              style={{ display: "flex", padding: "100px 0" }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/steps_holder.png`}
              />
              <div className="steps-texts">
                <Typography variant="h3">
                  <strong>
                    <Typography variant="span" className="badge">
                      1.
                    </Typography>
                    Crie sua conta e defina seu perfil
                  </strong>
                </Typography>
                <Typography variant="h3">
                  <strong>
                    <Typography variant="span" className="badge">
                      2.
                    </Typography>
                    Crie sua conta e defina seu perfil
                  </strong>
                </Typography>
                <Typography variant="h3">
                  <strong>
                    <Typography variant="span" className="badge">
                      3.
                    </Typography>
                    Crie sua conta e defina seu perfil
                  </strong>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="plans" className="full-size">
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            <strong>planos</strong>
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
                    <strong>GRÁTIS</strong>
                  </Typography>
                  <Divider />
                  <Typography variant="h5">
                    <strong>dslad aslkdjas ldjsaldj</strong>
                  </Typography>
                  <Typography variant="h5" style={{ color: "#979797" }}>
                    <strong>dslad aslkdjas ldjsaldj</strong>
                  </Typography>
                  <Typography variant="h5" style={{ color: "#979797" }}>
                    <strong>dslad aslkdjas ldjsaldj</strong>
                  </Typography>
                  <Divider />
                </div>
              </Grid>
              <Grid xs={12} sm={12} md={4} className="grid-card">
                <div className="card">
                  <Typography variant="h3">
                    <strong>R$ 49,90</strong>
                  </Typography>
                  <Divider />
                  <Typography variant="h5">
                    <strong>dslad aslkdjas ldjsaldj</strong>
                  </Typography>
                  <Typography variant="h5">
                    <strong>dslad aslkdjas ldjsaldj</strong>
                  </Typography>
                  <Typography variant="h5" style={{ color: "#979797" }}>
                    <strong>dslad aslkdjas ldjsaldj</strong>
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
                <div className="card">
                  <Typography variant="h3">
                    <strong>R$ 79,90</strong>
                  </Typography>
                  <Divider />
                  <Typography variant="h5">
                    <strong>dslad aslkdjas ldjsaldj</strong>
                  </Typography>
                  <Typography variant="h5">
                    <strong>dslad aslkdjas ldjsaldj</strong>
                  </Typography>
                  <Typography variant="h5">
                    <strong>dslad aslkdjas ldjsaldj</strong>
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
        </Container>
      </section>
      <section
        id="start"
        className="full-size"
        style={{ backgroundColor: "#5ac1ac" }}
      >
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <Grid className="start-grid" container>
            <Grid xs={12} sm={12} md={6} className="start-card">
              <Typography variant="h1">
                <strong>comece a investir agora :)</strong>
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={6} className="start-card">
              <Button variant="contained" className="start-btn">
                Começar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </section>
      <div className="footer">
        <Typography variant="body1">Futurus | 2020</Typography>
      </div>
    </>
  );
};

export default LandingPage;
