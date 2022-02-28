import React, {useState} from "react";

const BtnGroup = (props) => {
  const [disable, setDisable] = useState(false);

  const disableButton = () => {
    setDisable(true);
    setTimeout(()=>{
      setDisable(false);
      console.log('Button Activated')}, 2000)
  }
  return (
    <div className="BtnGroup">
      <button disabled={disable} onClick={() =>{disableButton(); props.showBattle("Rock")}} id="rock">
        Rock
      </button>
      <button disabled={disable} onClick={() =>{disableButton(); props.showBattle("Paper")}} id="paper">
        Paper
      </button>
      <button disabled={disable} onClick={() =>{disableButton(); props.showBattle("Scissors")}} id="scissors">
        Scissors
      </button>
      <button disabled={disable} onClick={() =>{disableButton(); props.showBattle("Lizard")}} id="lizard">
        Lizard
      </button>
      <button disabled={disable} onClick={() =>{disableButton(); props.showBattle("Spock")}} id="spock">
        Spock
      </button>
      <button className="logout" onClick={() => props.setLoggedIn(false)}>
        logout
      </button>
    </div>
  );
};

export default BtnGroup;
