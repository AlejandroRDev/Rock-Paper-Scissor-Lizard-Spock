import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import "./App.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [playersData, setPlayersData] = React.useState(
    () => JSON.parse(localStorage.getItem("players")) || []
  );
  const [playerName, setPlayerName] = React.useState("");

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(playersData));
  }, [playersData]);

  const createNewPlayer = () => {
    if (playerName.length === 0) {
      return;
    } else {
      const newPlayer = {
        name: playerName,
        gamesPlayed: 0,
        wins: 0,
      };
      setPlayersData((prevPlayersData) => [newPlayer, ...prevPlayersData]);
      console.log(playersData);
      setLoggedIn(true);
    }
  };

  const updatePlayer = (scoreWin) => {
    setPlayersData((prevPlayersData) =>
      prevPlayersData.map((player) => {
        if (player.name === playerName) {
          return {
            name: playerName,
            gamesPlayed: player.gamesPlayed + 1,
            wins: scoreWin > player.wins ? scoreWin : player.wins,
          };
        } else {
          return player;
        }
      })
    );
  };

  const findCurrentPlayer = () => {
    const data = playersData.find((item) => item.name === playerName);
    return data;
  };

  return (
    <div data-testid="App">
      {loggedIn === false ? (
        <Home
          playersData={playersData}
          playerName={playerName}
          playerFound={findCurrentPlayer()}
          setPlayerName={setPlayerName}
          createNewPlayer={createNewPlayer}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <Game
          playersData={playersData}
          playerFound={findCurrentPlayer()}
          updatePlayer={updatePlayer}
          setLoggedIn={setLoggedIn}
          playerName={playerName}
        />
      )}
    </div>
  );
}

export default App;
