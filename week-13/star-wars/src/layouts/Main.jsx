import React from "react";
import { useNavigate } from "react-router-dom"
import { Button, ButtonGroup } from "@mui/material";
import { StarshipContextProvider } from "../Context/StarshipContext";

function Main({children}) {
  const navigate = useNavigate();

  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => navigate("/starships")}>Starships</Button>
      </ButtonGroup>
      <div className="content">{children}</div>
    </>
  )
}

export default Main