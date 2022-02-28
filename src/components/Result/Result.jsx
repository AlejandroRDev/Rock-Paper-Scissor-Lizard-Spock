import React from 'react'
import './Result.scss';

const Result = (props) => {


  return (
    <div>
    <p>{props.result}</p>
    <p>{props.winner}</p>
    </div>
  )
}

export default Result