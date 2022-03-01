import React, { useState } from "react";
import Result from "../../components/Result/Result";
import BtnGroup from "../../components/BtnGroup/BtnGroup";
import Score from "../../components/Score/Score";
import Header from "../../components/Header/Header";
import Ranking from "../../components/Ranking/Ranking";
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
  const [result, setResult] = useState(`You : ... VS ... : IA`);
  const [rakingToggle, setRankingToggle] = useState(false);

 

  const randomNumber = (min, max) => {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  };

  function handleMachineMove() {
    machineChoice = randomNumber(0, 4);
    while (lastMachineMove === options[machineChoice]) {
      handleMachineMove();
    }
    setMachineMove(options[machineChoice]);
    setLastMachineMove(options[machineChoice]);
  }

  function handlePlayerMove(playerWeapon) {
    setPlayerMove(playerWeapon);
    return playerWeapon;
  }

  function battle(playerWeapon) {
    console.log(playerMove, machineMove);

    if (playerWeapon === options[machineChoice]) {
      props.updatePlayer(win);
      setWinner("It's a tie");
    } else if (
      (playerWeapon === "Rock" &&
        (options[machineChoice] === "Scissors" || options[machineChoice] === "Lizard")) ||
      (playerWeapon === "Lizard" &&
        (options[machineChoice] === "Spock" || options[machineChoice] === "Paper")) ||
      (playerWeapon === "Spock" &&
        (options[machineChoice] === "Scissors" || options[machineChoice] === "Rock")) ||
      (playerWeapon === "Paper" &&
        (options[machineChoice] === "Rock" || options[machineChoice] === "Spock")) ||
      (playerWeapon === "Scissors" &&
        (options[machineChoice] === "Paper" || options[machineChoice] === "Lizard"))
    ) {
      setWin(win + 1);
      setWinner ("You win");
      props.updatePlayer(win);
    } else {
      props.updatePlayer(win);
      setWinner("Machine wins");
    }
    
  }

  function showBattle(choice) {
    handlePlayerMove(choice);
    handleMachineMove();
    setResult(`You : ${choice} VS thinking... : IA`);
    setTimeout(() => {
      battle(choice);
      setResult(`You : ${choice} VS ${options[machineChoice]} : IA`);
    }, 1000);
  }

  return (
    <div className="game">
      <Header playerName={props.playerName} setLoggedIn={props.setLoggedIn} setRankingToggle={setRankingToggle}/>
      {rakingToggle === false ? (
      <div className="game__container">
        <Score counter={win} />
        <Result winner={winner} result={result} />
        <BtnGroup
          playerMove={playerMove}
          machineMove={machineMove}
          showBattle={showBattle}/>
      </div>
      ) : ( <Ranking playersData={props.playersData}/>)}
    </div>
  );
}

export default Game;
