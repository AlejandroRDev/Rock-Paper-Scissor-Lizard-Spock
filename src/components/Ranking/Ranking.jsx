import React from "react";
import './Ranking.scss';

const Ranking = (props) => {
  const playersMapped = [];

  const mapRanking = () => {
    props.playersData.map((player) => {
        return playersMapped.push(player);
    })
    playersMapped.sort(function(a, b){return b.wins - a.wins})
  };

  mapRanking();

  return (
    <div className="ranking" data-testid="Ranking">
      <ul className="ranking__list">
      <li className="ranking__example">
      <h2 className="ranking__player--init">PLAYERS</h2>
            <h2 className="ranking__player--initW">WINS</h2>
      </li>
        {playersMapped.map((player) => (
          <li key={player.name} className="ranking__player">
            <h2 className="ranking__player--title">{player.name}</h2>
            <p className="ranking__player--text">{player.wins}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
