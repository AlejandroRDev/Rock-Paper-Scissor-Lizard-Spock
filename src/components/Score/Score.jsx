import React from "react";
import './Score.scss';

const Score = ({ counter }) => {
  return (
    <div className="score">
      <h2 className="score__title">
        Score: <span className="score__title--counter">{counter}</span>
      </h2>
    </div>
  );
};

export default Score;
