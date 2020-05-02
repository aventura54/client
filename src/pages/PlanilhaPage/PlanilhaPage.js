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
import CheckIcon from '@material-ui/icons/Check';
import "./PlanilhaPage.scss";

export default class PlanilhaPage extends React.Component {

  state = {
    listRendas: [],
    listGastos: [],
    inputRendaTipo: null,
    inputRendaValor: null,
    inputGastoTipo: null,
    inputGastoValor: null,
    isNovaRendaVisible: false,
    isNovoGastoVisible: false,
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

  /**
   * RENDAS
   */

  renderMinhasRendas = () => {
    return this.state.listRendas.map((renda) => (
      <div className="renda" key={renda.id}>
        <Typography className="tipo-label" variant="body">
          {renda.tipo}
        </Typography>
        <Typography className="valor-label" variant="body">
          R$ {renda.valor}
        </Typography>
        <IconButton className="botao-editar">
          <EditIcon
            className="botao-editar-icon"
            onClick={() => {

              if (this.state.isNovaRendaVisible) {
                return;
              }

              this.setState({
                ...this.state,
                inputRendaTipo: renda.tipo,
                inputRendaValor: renda.valor,
                isNovaRendaVisible: true,
                listRendas: this.state.listRendas.filter(r => r.id !== renda.id),
              });
            }}
          />
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
          className="input-conteudo"
          label="Tipo de renda"
          variant="outlined"
          value={this.state.inputRendaTipo}
          onChange={e => this.setState({ ...this.state, inputRendaTipo: e.target.value })}
          size="small"
        />
        <TextField
          id="nova-renda-valor"
          className="input-conteudo"
          label="Valor (R$)"
          variant="outlined"
          InputProps={{ type: 'number' }}
          value={this.state.inputRendaValor}
          onChange={e => this.setState({ ...this.state, inputRendaValor: e.target.value })}
          size="small"
        />
        <IconButton className="botao-confirmar">
          <CheckIcon
            className="botao-confirmar-icon"
            onClick={() => {

              const rendaTipo = this.state.inputRendaTipo;
              const rendaValor = this.state.inputRendaValor;

              if (!rendaTipo || !rendaValor) {
                return;
              }

              this.setState({
                ...this.state,
                listRendas: [
                  ...this.state.listRendas,
                  {
                    id: Date.now(),
                    tipo: rendaTipo,
                    valor: rendaValor
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

  /**
   * GASTOS
   */

  renderMeusGastos = () => {
    return this.state.listGastos.map((gasto) => (
      <div className="gasto" key={gasto.id}>
        <Typography className="tipo-label" variant="body">
          {gasto.tipo}
        </Typography>
        <Typography className="valor-label" variant="body">
          R$ {gasto.valor}
        </Typography>
        <IconButton className="botao-editar">
          <EditIcon
            className="botao-editar-icon"
            onClick={() => {

              if (this.state.isNovoGastoVisible) {
                return;
              }

              this.setState({
                ...this.state,
                inputGastoTipo: gasto.tipo,
                inputGastoValor: gasto.valor,
                isNovoGastoVisible: true,
                listGastos: this.state.listGastos.filter(g => g.id !== gasto.id),
              });
            }}
          />
        </IconButton>
      </div>
    ))
  }

  renderNovoGasto = () => {

    if (!this.state.isNovoGastoVisible) {
      return;
    }

    return (
      <div className="novo-gasto">
        <TextField
          id="novo-gasto-tipo"
          className="input-conteudo"
          label="Tipo de gasto"
          variant="outlined"
          value={this.state.inputGastoTipo}
          onChange={e => this.setState({ ...this.state, inputGastoTipo: e.target.value })}
          size="small"
        />
        <TextField
          id="novo-gasto-valor"
          className="input-conteudo"
          label="Valor (R$)"
          variant="outlined"
          InputProps={{ type: 'number' }}
          value={this.state.inputGastoValor}
          onChange={e => this.setState({ ...this.state, inputGastoValor: e.target.value })}
          size="small"
        />
        <IconButton className="botao-confirmar">
          <CheckIcon
            className="botao-confirmar-icon"
            onClick={() => {

              const gastoTipo = this.state.inputGastoTipo;
              const gastoValor = this.state.inputGastoValor;

              if (!gastoTipo || !gastoValor) {
                return;
              }

              this.setState({
                ...this.state,
                listGastos: [
                  ...this.state.listGastos,
                  {
                    id: Date.now(),
                    tipo: gastoTipo,
                    valor: gastoValor
                  }
                ],
                inputGastoTipo: null,
                inputGastoValor: null,
                isNovoGastoVisible: false
              })
            }}
          />
        </IconButton>
      </div>
    );
  }

  renderSectionGastos = () => (
    <div className="section-meus-gastos">
      <Typography className="title" variant="h4">
        meus gastos (mensal)
      </Typography>
      {this.renderMeusGastos()}
      {this.renderNovoGasto()}
      <Button id="adicionar-gasto" color="primary" onClick={() => this.setState({ ...this.state, isNovoGastoVisible: true })}>Adicionar +</Button>
    </div>
  );

  renderButtons = () => (
    <div className="section-buttons">
      <Link to="/quanto-investir" style={{ textDecoration: "none" }}>
        <Button
          className="button button-exit"
          color="secondary"
          variant="contained"
        >
          Agora não
        </Button>
      </Link>

      <Link to="/quanto-investir" style={{ textDecoration: "none" }}>
        <Button className="button button-next" color="primary" variant="contained">
          Próximo
      </Button>
      </Link>
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