import React from 'react'
import './Result.scss';

const Result = (props) => {


  return (
    <div className="result">
    <p className="result__text">{props.result}</p>
    <p className="result__text">{props.winner}</p>
    </div>
  )
}

export default Result