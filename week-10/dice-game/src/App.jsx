import React, { useState } from 'react'
import './App.css'
import dice1 from '../src/assets/dice1.png'
import dice2 from '../src/assets/dice2.png'
import dice3 from '../src/assets/dice3.png'
import dice4 from '../src/assets/dice4.png'
import dice5 from '../src/assets/dice5.png'
import dice6 from '../src/assets/dice6.png'

function App() {
  const [isRolling, setIsRolling] = useState(false);
  const [playerName, setPlayerName] = useState(null);
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(0);
  const [playerScoreOne, setPlayerScoreOne] = useState(null);
  const [playerScoreTwo, setPlayerScoreTwo] = useState(null);
  const [result, setResult] = useState("Start Game");

  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleRoll = () => {
    if(playerName) {
      setIsRolling(true);
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === "Enter") {
      console.log(e.key);
      setPlayerName(e.target.value);
    }
  }

  if(isRolling) {
    for (let i = 0; i < 6; i++) {
      setResult("Rolling...");
      setTimeout(() => {
        const dice_one = Math.floor(Math.random() * 5);
        const dice_two = Math.floor(Math.random() * 5);
        setDiceOne(dice_one);
        setDiceTwo(dice_two);
        if (i === 5) {
          setPlayerScoreOne(dice_one);
          setPlayerScoreTwo(dice_two);
          if(dice_one > dice_two) {
            setResult(`${playerName} Wins!`);
          }else if(dice_one < dice_two) {
            setResult("Player 2 Wins!");
          }else {
            setResult("DRAW");
          }
        }
      }, i*500);
      setIsRolling(false);
    }
  }
  
  return (
    <>
      <h1>{result}</h1>
      <div className='board'>
        <div className='player'>
          {playerName ? <h2> {playerName} </h2> : <input type="text" onKeyUp={handleKeyUp} placeholder='type a name then press enter'/> }
          <img src={dices[diceOne]} alt="dice for player 1" />
        </div>
        <div className='player'>
          <h2>Player 2</h2>
          <img src={dices[diceTwo]} alt="dice for player 2" />
        </div>
      </div>
      <button onClick={handleRoll} className='roll-btn'>ROLL</button>
    </>
  )
}

export default App
