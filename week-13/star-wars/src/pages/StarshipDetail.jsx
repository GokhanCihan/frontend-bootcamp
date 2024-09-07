import { useEffect, useState } from 'react';
import axios from "axios";
import Main from '../layouts/Main';

const instance = axios.create({
  baseURL: "https://swapi.dev/api",
});

function StarshipDetail({detailInfo}) {

  return (
    <Main>
      <h1>Starships</h1>
      <div className="ship-container">
        {JSON.stringify(detailInfo)}
      </div>
    </Main>
  )
}

export default StarshipDetail
