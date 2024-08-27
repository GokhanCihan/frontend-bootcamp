import { useState } from 'react';
import './App.css'
import NewNote from './Components/NewNote/NewNote';
import Notes from './Components/Notes/Notes'
import DATA from './assets/DATA';
function App() {
  const [notes, setNotes] = useState([...DATA])
  return (
    <>
     <h1>NOTES APP</h1>
     <NewNote  data={notes} setData={setNotes}/>
     <Notes data={notes} />
    </>
  )
}

export default App
