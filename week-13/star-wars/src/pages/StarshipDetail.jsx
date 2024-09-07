import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import Main from '../layouts/Main';
import StarshipContext from '../Context/StarshipContext';
import { Typography, Divider } from '@mui/material';

const instance = axios.create({
  baseURL: "https://swapi.dev/api",
});

function StarshipDetail() {
  const { detailInfo } = useContext(StarshipContext);

  const info = {
    "class": detailInfo.starship_class,
    "model": detailInfo.name,
    "manufacturer": detailInfo.manufacturer,
    "cost": detailInfo.cost_in_credits,
    "max atmosphering speed": detailInfo.max_atmosphering_speed,
    "crew": detailInfo.crew,
    "passengers": detailInfo.passengers,
    "cargo_capacity": detailInfo.cargo_capacity,
    "consumables": detailInfo.consumables,
    "hyperdrive rating": detailInfo.hyperdrive_rating,
    "MGLT": detailInfo.MGLT
  }

  return (
    <Main>
      <h1>{detailInfo.name}</h1>
      {
        Object.entries(info).map(([key, value], index) => {
          return (
            <div key={index} className='detail-container'>
              <div className='info-container'>
                <Typography variant="string" align="left" sx={{ color: 'text.primary' }}>
                  {key}
                </Typography>
                <Typography variant="string" align="left" sx={{ color: 'text.secondary' }}>
                  {value}
                </Typography>
              </div>
              <Divider/>
            </div>
          )
        })
      }
    </Main>
  )
}

export default StarshipDetail
