import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import SocialMediaButton from "../buttons/socialMediaButton/socialMediaButton";
import "./Modal.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 878,
    height: 570,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const imageLeft = (
  <img
    className="image-login-modal"
    alt="futurus"
    src={`${process.env.PUBLIC_URL}/assets/images/esquerda-login.png`}
  />
);

const socialMediaButtons = (
  <>
    <SocialMediaButton google={true} />
    <SocialMediaButton />
  </>
);

const divider = (
  <div className="divider">
    <span className="divider-text">ou</span>
  </div>
);

const inputFields = (
  <div className="input-container">
    <TextField fullWidth id="user-email" label="email" />
    <TextField fullWidth id="user-pwd" type="password" label="senha" />
  </div>
);

const buttonAcessar = (
  <Link to="/organizacao" style={{ textDecoration: "none", width: "100%" }}>
    <Button className="button-acessar" variant="contained" color="primary">
      acessar
    </Button>
  </Link>
);
export default function SimpleModal({ open, handleClose }) {
  const classes = useStyles();
  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    top: "15%",
    left: "15%",
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid item xs={6}>
        {imageLeft}
      </Grid>
      <Grid item xs={6}>
        <div class="block-wrap-social-media">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            {socialMediaButtons}

            {divider}
            {inputFields}
            {buttonAcessar}
          </Grid>
        </div>
      </Grid>
    </div>
  );

  return (
    <div>
      <Modal
        disableAutoFocus
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
