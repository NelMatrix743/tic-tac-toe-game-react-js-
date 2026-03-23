import { useState } from 'react';
import "./Card.css";

import OPlayIcon from "~/assets/gameAssets/o_play_icon.png";
import XPlayIcon from "~/assets/gameAssets/x_play_icon.png";


const cardOptions = [
  {
    cardIcon : XPlayIcon,
    cardClass : "card-flipped-x"
  },
  {
    cardIcon : OPlayIcon,
    cardClass : "card-flipped-o"
  }
];


function Card() {

  const [ flipped, setFlipped ] = useState(false);
  const [ cardChoice, setCardChoice ] = useState({});


  function flippedStateCallBack(){
    if(flipped)
      return undefined;
    setCardChoice(cardOptions[Math.floor(Math.random() * cardOptions.length)])
    console.log(cardChoice);
    setFlipped((prevState) => !prevState);
  }

  return (
    <div className={ flipped ? cardChoice.cardClass : "card" } onClick={ flippedStateCallBack }>
      <img className="game-icon" src={ flipped ? cardChoice.cardIcon : null } />
    </div>
  )
}

export default Card;