import React from 'react'
import './Result.scss';

const Result = (props) => {


  return (
    <div className="result">
    <p className="result__textResult">{props.result}</p>
    <p className="result__textWinner">{props.winner}</p>
    </div>
  )
}

export default Result