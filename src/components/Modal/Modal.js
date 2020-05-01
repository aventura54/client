import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

export default function SimpleModal({ open, handleClose }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

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
        <img
          className="image-login-modal"
          alt="futurus"
          src={`${process.env.PUBLIC_URL}/assets/images/esquerda-login.png`}
        />
      </Grid>
      {/* <h2 id="simple-modal-title">Text in a modal</h2> */}
      <Grid item xs={6}>
        <div class="block-wrap-social-media">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <SocialMediaButton google={true} />
            <SocialMediaButton />

            <div className="divider">
              <span className="divider-text">ou</span>
            </div>
            <div className="input-container">
              <TextField fullWidth id="user-email" label="email" />
              <TextField fullWidth id="user-pwd" label="senha" />
            </div>
            <Button
              className="button-acessar"
              variant="contained"
              color="primary"
            >
              acessar
            </Button>
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
