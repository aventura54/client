import React from "react";

import {
  Container,
  Typography,
  IconButton,
  Button,
  Grid,
  LinearProgress
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";

import "./OrganizacaoPage.scss";

const renderIcon = () => (
  <div className="section-icon">
    <IconButton>
      <BackIcon className="back-icon" />
    </IconButton>
  </div>
)

const renderContent = () => (
  <div className="section-content">
    <Typography className="title" variant="h2">vamos organizar seus gastos?</Typography>
    <Typography className="content" variant="body">
      Acreditamos que antes de investir é preciso se conhecer. Por isso a primeira etapa da definição de perfil é a organização dos gastos. Aqui é bacana colocar todos os seus gastos mesmo: aluguel, contas como água, luz, telefone, internet, celular, fatura do cartão de crédito e por aí vai.
        </Typography>
  </div>
)

const renderButtons = () => (
  <div className="section-buttons">
    <Button className="button button-exit" color="secondary" variant="contained">Agora não</Button>
    <Button className="button button-next" color="primary" variant="contained">Vamos lá</Button>
  </div>
)

const OrganizacaoPage = () => {
  return (
    <>
      <LinearProgress variant="buffer" value={17} valueBuffer={100} />
      <Container>
        <Grid direction="column" justify="space-evenly" className="organizacao-container" container>
          {renderIcon()}
          {renderContent()}
          {renderButtons()}
        </Grid>
      </Container>
    </>
  )
}

export default OrganizacaoPage;