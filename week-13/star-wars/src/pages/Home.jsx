import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => navigate("/starships")}>Starships</Button>
      </ButtonGroup>
    </>
  )
}

export default Home
