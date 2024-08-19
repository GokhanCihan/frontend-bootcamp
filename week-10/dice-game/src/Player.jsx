import React, { useState } from "react"
import dice1 from '../src/assets/dice1.png'
import dice2 from '../src/assets/dice2.png'
import dice3 from '../src/assets/dice3.png'
import dice4 from '../src/assets/dice4.png'
import dice5 from '../src/assets/dice5.png'
import dice6 from '../src/assets/dice6.png'


function Dice({ rollStarted }) {
  const [dice, setDice] = useState(0);
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
  if (rollStarted) {
    const roll = setInterval(() => {
      setDice(Math.floor(Math.random() * 5))
    }, 300);
    setTimeout(() => {
      clearInterval(roll)
    }, 3000);
  }

  return (
    <>
      <img src={dices[dice]} alt="dice player X"/>
    </>
  )
}

function Player({rollStarted}) {

  return (
    <>
      <div className='player'>
        <h2>Player X</h2>
        <Dice rollStarted={rollStarted}/>
      </div>
    </>
  )
}

export default Player