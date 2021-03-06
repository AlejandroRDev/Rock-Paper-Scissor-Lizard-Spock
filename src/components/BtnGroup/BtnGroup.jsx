import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./BtnGroup.scss";

const BtnGroup = (props) => {
  const [disable, setDisable] = useState(false);
  
  const disableButton = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 2000);
  };
  
  return (
    <div className="btnGroup" data-testid="BtnGroup">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          disabled={disable}
          variant="contained"
          size="large"
          onClick={() => {
            disableButton();
            props.showBattle("Rock");
          }}
        >
          <img
            className="imgGame"
            src="./assets/images/rock.png"
            alt="rock hand"
          />
        </Button>
        <Button
          disabled={disable}
          variant="contained"
          size="large"
          onClick={() => {
            disableButton();
            props.showBattle("Paper");
          }}
        >
          <img
            className="imgGame"
            src="./assets/images/hand-paper.png"
            alt="rock hand"
          />
        </Button>
        <Button
          disabled={disable}
          variant="contained"
          size="large"
          onClick={() => {
            disableButton();
            props.showBattle("Scissors");
          }}
        >
          <img
            className="imgGame"
            src="./assets/images/scissor.png"
            alt="rock hand"
          />
        </Button>
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          disabled={disable}
          variant="contained"
          size="large"
          onClick={() => {
            disableButton();
            props.showBattle("Lizard");
          }}
        >
          <img
            className="imgGame"
            src="./assets/images/lizard.png"
            alt="rock hand"
          />
        </Button>
        <Button
          disabled={disable}
          variant="contained"
          size="large"
          onClick={() => {
            disableButton();
            props.showBattle("Spock");
          }}
        >
          <img
            className="imgGame"
            src="./assets/images/spock.png"
            alt="rock hand"
          />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default BtnGroup;
