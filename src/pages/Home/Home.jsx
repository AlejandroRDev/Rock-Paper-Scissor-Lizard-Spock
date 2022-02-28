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
    <div className="home">
      <LoginPage
        playerName={props.playerName}
        gotPlayer={gotPlayer}
        setGotPlayer={setGotPlayer}
        setPlayerName={props.setPlayerName}
        welcomeMsg={welcomeMsg}
      />
      <div className="home__imgContainer">
{/*       <img className="home__imgContainer--img" src="./assets/images/home.png" alt="piedra papel tijera lagarto spock"/>
 */}      </div>
    </div>
  );
};

export default Home;
