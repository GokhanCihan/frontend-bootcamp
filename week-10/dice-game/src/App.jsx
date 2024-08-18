import React, { useState } from 'react'
import './App.css'
import Player from './Player'

function App() {
  return (
    <>
      <h1 >DRAW</h1>
      <div className='board'>
        <Player />
        <Player />
      </div>
      <button onClick={rollDice}  className='roll-btn'></button>
    </>
  )
}

export default App
