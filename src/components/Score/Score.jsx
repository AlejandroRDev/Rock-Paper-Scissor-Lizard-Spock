import React from "react";
import './Score.scss';

const Score = ({ counter }) => {
  return (
    <div>
      <h2 className="score">
        Score: <span>{counter}</span>
      </h2>
    </div>
  );
};

export default Score;
