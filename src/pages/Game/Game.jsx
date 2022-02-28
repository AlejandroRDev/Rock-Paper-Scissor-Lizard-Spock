import React, { useState } from "react";
import Result from "../../components/Result/Result";
import BtnGroup from "../../components/BtnGroup/BtnGroup";
import Score from "../../components/Score/Score";
import Header from "../../components/Header/Header";
import "./Game.scss";

const Game = (props) => {
  let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  let machineChoice;
  const [lastMachineMove, setLastMachineMove] = useState("");
  const [machineMove, setMachineMove] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [winner, setWinner] = useState("");
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [handler, setHandler] = useState(false);

  const randomNumber = (min, max) => {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  };

  const handleMachineMove = () => {
    machineChoice = randomNumber(0, 4);
    while (lastMachineMove === options[machineChoice]) {
      handleMachineMove();
    }
    setMachineMove(options[machineChoice]);
    setLastMachineMove(options[machineChoice]);
  };

  const handlePlayerMove =  (playerWeapon) => {
    setPlayerMove(playerWeapon);
    return playerWeapon;
   
  };

  const battle = (playerWeapon) => {
    console.log(playerMove, machineMove);
    if (playerWeapon === options[machineChoice]) {
      setWinner("It's a tie");
    } else if (playerWeapon === "Rock") {
      if (options[machineChoice] === "Scissors" || options[machineChoice] === "Lizard") {
        setWin(win + 1);
        setWinner("You win");
      }
    } else if (playerWeapon === "Paper") {
      if (options[machineChoice] === "Rock" || options[machineChoice] === "Spock") {
        setWin(win + 1);
        setWinner("You win");
      }
    } else if (playerWeapon === "Scissors") {
      if (options[machineChoice] === "Paper" || options[machineChoice] === "Lizard") {
        setWin(win + 1);
        setWinner("You win");
      }
    } else if (playerWeapon === "Lizard") {
      if (options[machineChoice] === "Paper" || options[machineChoice] === "Spock") {
        setWin(win + 1);
        setWinner("You win");
      }
    } else if (playerWeapon === "Spock") {
      if (options[machineChoice] === "Rock" || options[machineChoice] === "Scissors") {
        setWin(win + 1);
        setWinner("You win");
      }
    } else {
      setLose(lose + 1);
      setWinner("Machine wins");
    }
    props.updatePlayer(win);
  };



  const showBattle = (choice) => {
    if (handler === false) {
      setHandler(true);
      handlePlayerMove(choice);
      handleMachineMove();
      battle(choice);
      setHandler(false);
    }
  };

  return (
    <div className="game">
      <Header playerName={props.playerName} setLoggedIn={props.setLoggedIn} />
      <div className="game__container">
        <Score counter={win} />
        <Result
          winner={winner}
          updatePlayer={props.updatePlayer}
          playerMove={playerMove}
          machineMove={machineMove}
        />
        <BtnGroup
          playerMove={playerMove}
          machineMove={machineMove}
          showBattle={showBattle}
        />
      </div>
    </div>
  );
};

export default Game;
