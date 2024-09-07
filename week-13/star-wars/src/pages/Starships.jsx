import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import StarshipActionCard from '../components/StarshipActionCard/StarshipActionCard'
import Chip from '@mui/material/Chip';
import Main from '../layouts/Main';
import StarshipContext from '../Context/StarshipContext';

function Starships() {
  const { starships, getMoreStarships, disabled } = useContext(StarshipContext);

  return (
    <Main>
      <h1>Starships</h1>
      <div className="ship-container">
        {
          starships.map((starship, index) => {
            return (
              <StarshipActionCard
                key={index}
                starship={starship}
              />
            )
          })
        }
      </div>
      <Chip
        variant='filled'
        color='primary'
        disabled={disabled}
        onClick={() => getMoreStarships()}
        label="More Spaceships"
      ></Chip>
    </Main>
  )
}

export default Starships
