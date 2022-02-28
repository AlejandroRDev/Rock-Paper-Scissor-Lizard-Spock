import React from "react";
import "./Login.scss";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";


const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  "& label.Mui-focused": {
    color: p.focusColor
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor,

  },
  
}));

export default function LoginPage({ playerName, setPlayerName, welcomeMsg }) {
  return (
    <div className="login">
      <div className="login__imgContainer">
        <img src="./assets/images/player.png" alt="player" />
      </div>
      <h2 className="login__title">Create a new player</h2>
      <CssTextField
        id="filled-basic"
        label="Name"
        variant="filled"
        focusColor="#673ab7"
        value={playerName}
        style={{ backgroundColor: "#e0e0e0", borderRadius: '5px', margin: '20px' }}
        onChange={(e) => setPlayerName(e.target.value)}
      />

        <Button style={{backgroundColor: '#673ab7' }}variant="contained" size="large" onClick={() => welcomeMsg()}>
          Join
        </Button>
    </div>
  );
}
