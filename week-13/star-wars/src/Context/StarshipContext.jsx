import React, {useEffect, useState} from "react";
import axios from "axios";

const StarshipContext = React.createContext();

export function StarshipContextProvider({children}) {
  const [nextUrl, setNextUrl] = useState("");
  const [starships, setStarships] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [detailUrl, setDetailUrl] = useState("");
  const [detailInfo, setDetailInfo] = useState("");

  const instance = axios.create({
    baseURL: "https://swapi.dev/api",
  });

  const getStarshipDetail = () => {
    axios.get(detailUrl)
      .then((res) => {
        setDetailInfo(res.data)
      })
      .catch((err) => console.log(err))
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
        setDisabled(true);
      }
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStarships();
  }, [])

  useEffect(() => {
    if(detailUrl) {
      getStarshipDetail();
    }
  }, [detailUrl])

  return (
    <StarshipContext.Provider value={
      {
        starships,
        setStarships,
        nextUrl,
        setNextUrl,
        disabled,
        setDisabled,
        detailUrl,
        setDetailUrl,
        detailInfo,
        setDetailInfo,
        getMoreStarships
      }
    }>
      {children}
    </StarshipContext.Provider>
  )
}

export default StarshipContext