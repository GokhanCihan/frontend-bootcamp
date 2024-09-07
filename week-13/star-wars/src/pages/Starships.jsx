import { useContext, useEffect, useState } from 'react';
import StarshipActionCard from '../components/StarshipActionCard/StarshipActionCard'
import Chip from '@mui/material/Chip';
import Main from '../layouts/Main';
import StarshipContext from '../Context/StarshipContext';
import { TextField } from '@mui/material';

function Starships() {
  const { starships, getMoreStarships, disabled, setSearchInput, setDisabled } = useContext(StarshipContext);

  const handleKeyUp = (e) => {
    if(e.target.value !== ""){
      setDisabled(true);
    }else {
      setDisabled(false);
    }
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  const handleBlur = (e) => {
    if(e.target.value === ""){
      setDisabled(false);
    }
  }

  return (
    <Main>
      <h1>Starships</h1>
      <TextField 
        label="name/model" 
        type="search" 
        helperText="search starship"
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
      />
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
