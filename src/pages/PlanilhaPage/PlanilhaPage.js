import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  IconButton,
  Button,
  Grid,
  TextField,
  LinearProgress,
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./PlanilhaPage.scss";

export default class PlanilhaPage extends React.Component {

  state = {
    listRendas: [
      {
        id: Date.now(),
        tipo: 'Salário',
        valor: 'R$ 4.500,00'
      }
    ],
    listGastos: [],
    inputRendaTipo: null,
    inputRendaValor: null,
    inputGastoTipo: null,
    inputGastoValor: null,
    isNovaRendaVisible: false,
    isNovaGastoVisible: false,
  }

  renderIcon = () => (
    <div className="section-icon">
      <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
        <BackIcon className="back-icon" />
      </Link>
    </div>
  );

  renderHeader = () => (
    <div className="section-header">
      <Typography className="title" variant="h2">
        hora de registrar as suas rendas e gastos!
      </Typography>
    </div>
  );

  renderMinhasRendas = () => {
    return this.state.listRendas.map((renda) => (
      <div className="renda" key={renda.id}>
        <Typography className="tipo-renda" variant="body">
          {renda.tipo}
        </Typography>
        <Typography className="valor-renda" variant="body">
          {renda.valor}
        </Typography>
        <IconButton>
          <EditIcon className="botao-editar-renda" />
        </IconButton>
      </div>
    ))
  }

  renderNovaRenda = () => {

    if (!this.state.isNovaRendaVisible) {
      return;
    }

    return (
      <div className="nova-renda">
        <TextField
          id="nova-renda-tipo"
          label="Tipo de renda"
          variant="outlined"
          onChange={e => this.setState({ ...this.state, inputRendaTipo: e.target.value })}
          size="small"
        />
        <TextField
          id="nova-renda-valor"
          label="Valor (R$)"
          variant="outlined"
          InputProps={{ type: 'number' }}
          onChange={e => this.setState({ ...this.state, inputRendaValor: e.target.value })}
          size="small"
        />
        <IconButton>
          <CheckCircleIcon
            className="check-circle-icon"
            onClick={() => {

              const rendaTipo = this.state.inputRendaTipo;
              const rendaValor = this.state.inputRendaValor;

              this.setState({
                ...this.state,
                listRendas: [
                  ...this.state.listRendas,
                  {
                    id: Date.now(),
                    tipo: rendaTipo,
                    valor: `R$ ${rendaValor}`
                  }
                ],
                inputRendaTipo: null,
                inputRendaValor: null,
                isNovaRendaVisible: false
              })
            }}
          />
        </IconButton>
      </div>
    );
  }

  renderSectionRendas = () => (
    <div className="section-minhas-rendas">
      <Typography className="title" variant="h4">
        minhas rendas (mensal)
      </Typography>
      {this.renderMinhasRendas()}
      {this.renderNovaRenda()}
      <Button id="adicionar-renda" color="primary" onClick={() => this.setState({ ...this.state, isNovaRendaVisible: true })}>Adicionar +</Button>
    </div>
  );

  renderSectionGastos = () => (
    <div className="section-meus-gastos">
    </div>
  );

  renderButtons = () => (
    <div className="section-buttons">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          className="button button-exit"
          color="secondary"
          variant="contained"
        >
          Agora não
        </Button>
      </Link>
      <Button className="button button-next" color="primary" variant="contained">
        Vamos lá
      </Button>
    </div>
  );

  render() {

    console.log(this.state);

    return (
      <>
        <LinearProgress variant="buffer" value={34} valueBuffer={100} />
        <Container>
          <Grid
            direction="column"
            justify="space-evenly"
            className="planilha-container"
            container
          >
            {this.renderIcon()}
            {this.renderHeader()}
            {this.renderSectionRendas()}
            {this.renderSectionGastos()}
            {this.renderButtons()}
          </Grid>
        </Container>
      </>
    );
  }
}