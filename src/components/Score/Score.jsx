import React from "react";
import './Score.scss';

const Score = ( props ) => {
  return (
    <div className="score">
      <h2 className="score__title">
        Score : <span className="score__title--counter">{props.playerFound.wins}</span>
      </h2>
    </div>
  );
};

export default Score;
