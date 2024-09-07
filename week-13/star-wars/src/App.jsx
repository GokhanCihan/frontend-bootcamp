import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Starships from './pages/Starships';
import './App.css';
import StarshipDetail from "./pages/StarshipDetail";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/starships' element={<Starships />}></Route>
        <Route path="/starships/:id" element={<StarshipDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
