import React, { useState } from "react";
import Result from "../../components/Result/Result";
import BtnGroup from "../../components/BtnGroup/BtnGroup";
import Score from "../../components/Score/Score";
import Header from "../../components/Header/Header";
import "./Game.scss";

export default function Game(props) {
  let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  let machineChoice;
  const [lastMachineMove, setLastMachineMove] = useState("");
  const [machineMove, setMachineMove] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [winner, setWinner] = useState("Hola");
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [result, setResult] = useState(`You : ... Vs ... : Machine`);

  const randomNumber = (min, max) => {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  };

  function handleMachineMove(){
    machineChoice = randomNumber(0, 4);
    while (lastMachineMove === options[machineChoice]) {
      handleMachineMove();
    }
    setMachineMove(options[machineChoice]);
    setLastMachineMove(options[machineChoice]);
  };

  function handlePlayerMove(playerWeapon){
    setPlayerMove(playerWeapon);
    return playerWeapon;
   
  };

  function battle(playerWeapon) {
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



  function showBattle(choice) {  
      handlePlayerMove(choice);
      handleMachineMove();
      setResult(`You : ${choice} VS thinking... : Machine`)
      setTimeout(() => {
        battle(choice);
        setResult(`You : ${choice} VS ${options[machineChoice]} : Machine`);      
    }, 1000)
     
  };

  return (
    <div className="game">
      <Header playerName={props.playerName} setLoggedIn={props.setLoggedIn} />
      <div className="game__container">
        <Score counter={win} />
        <Result
          winner={winner}
          result={result}
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


