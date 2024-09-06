import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.dev/api",
});

function App() {
  const [page, setPage] = useState(1);
  const [starships, setStarships] = useState([])

  const getStarships = () => {
    instance.get("/starships/")
      .then((res) => {
        setStarships(res.data.results);
      })
      .catch((err) => console.log(err.response.data.detail))
  };

  const getMoreStarships = () => {
    instance.get(`starships/${page}/`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.log(err.response.data.detail));
  };

  useEffect(() => {
    getStarships();
  }, [])

  return (
    <>
      <p>{starships}</p>
    </>
  )
}

export default App
