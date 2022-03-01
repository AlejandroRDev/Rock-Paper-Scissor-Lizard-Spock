import React, { useState } from "react";
import LoginPage from "../../components/Login/Login";
import './Home.scss'

const Home = (props) => {
  const [gotPlayer, setGotPlayer] = useState(false);

  const welcomeMsg = () => {
    if (props.playerFound === undefined) {
      props.createNewPlayer();
    } else {
      props.setLoggedIn(true);
    }
  };

  return (
    <div className="home" data-testid="Home">
      <LoginPage
        playerName={props.playerName}
        gotPlayer={gotPlayer}
        setGotPlayer={setGotPlayer}
        setPlayerName={props.setPlayerName}
        welcomeMsg={welcomeMsg}
      />
      <div className="home__imgContainer">
      </div>
    </div>
  );
};

export default Home;
