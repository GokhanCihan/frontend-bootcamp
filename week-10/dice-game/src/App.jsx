import React, { useState } from 'react'
import './App.css'
import Player from './Player'

function App() {
  const [rollStarted, setRollStarted] = useState(false)

  function handleRoll() {
    setRollStarted(true)
    setTimeout(() => {
      setRollStarted(false);
    }, 2900);
  }

  return (
    <>
      <h1 >DRAW</h1>
      <div className='board'>
        <Player rollStarted={rollStarted} />
        <Player rollStarted={rollStarted} />
      </div>
      <button onClick={handleRoll} className='roll-btn'>ROLL</button>
    </>
  )
}

export default App
