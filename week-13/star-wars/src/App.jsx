import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import StarshipActionCard from './components/StarshipActionCard/StarshipActionCard';
import Chip from '@mui/material/Chip';

const instance = axios.create({
  baseURL: "https://swapi.dev/api",
});

function App() {
  const [nextUrl, setNextUrl] = useState("");
  const [starships, setStarships] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const getStarshipInfo = () => {
    instance.get("/starships/2")
      .then((res) => {
        console.log(res.data);
      })
  }

  const getStarships = () => {
    instance.get("/starships/")
      .then((res) => {
        setStarships(res.data.results);
        setNextUrl(res.data.next);
      })
      .catch((err) => console.log(err));
  };

  const getMoreStarships = () => {
    instance.get(nextUrl)
    .then((res) => {
      setStarships([...starships, ...res.data.results]);
      if(res.data.next){
        setNextUrl(res.data.next);
      } else {
        console.log(res.data.next);
        setDisabled(true);
      }
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStarships();
  }, [])

  return (
    <>
      <h1>Starships</h1>
      <div className="ship-container">
        {
          starships.map((starship, index) => {
            return (
              <StarshipActionCard
                key={index}
                name={starship.name}
                shipClass={starship.starship_class}
                model={starship.model}
                hpRating={starship.hyperdrive_rating}
                length={starship.length}
                manufacturer={starship.manufacturer}
                imgUrl={"imageUrl"}
                detailUrl={starship.url}
              />
            )
          }
        )}
      </div>
      <Chip
        variant='filled'
        color='primary' 
        disabled={disabled} 
        onClick={() => getMoreStarships()} 
        label="More Spaceships"
      ></Chip>
    </>
  )
}

export default App
