import React, { useEffect, useState } from "react";

import { GlobalStyle, Wrapper } from "./App.styled";

import GpsIcon from "./components/GpsIcon/GpsIcon";
import Ripples from "./components/Ripples/Ripples";
import { apiTesting } from "./api";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [zoom, setZoom] = useState("13");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await apiTesting(lat + "%7C" + lon);
      setArticles(fetchedData);
    };
    fetchData();
  }, [lat && lon]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <GpsIcon setLat={setLat} setLon={setLon} />
        <Ripples articles={articles} lat={lat} lon={lon} />
      </Wrapper>
    </>
  );
};

export default App;
