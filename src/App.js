import React, { useEffect, useState } from "react";

import { GlobalStyle, Wrapper } from "./App.styled";

import GpsIcon from "./components/GpsIcon/GpsIcon";
import Ripples from "./components/Ripples/Ripples";
import { locationAPI, apiTesting } from "./api";

// To Do
// Trying for the useEffect to call the locationAPI instead of the button, currently it is a mess the code on the API index file. It's returning either undefined or with the testCoords an emtpy array. Might need an async function? Why is it undefined. When adding await it says that it is not necessary meaning that there isn't a promise meaning that the console.log() will not run before the things are executed.

const App = () => {
  const [articles, setArticles] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [coords, setCoords] = useState([85.77654, 172.212518]);
  const [zoom, setZoom] = useState(15);

  const fetchData = async () => {
    const fetchedData = await apiTesting(lat + "%7C" + lon);
    setArticles(fetchedData);
  };

  useEffect(() => {
    console.log(locationAPI());
    // const fetchData = async () => {
    //   console.log("Testing");
    //   await setCoords(setTimeout(locationAPI(), 1000));
    //   console.log(coords);
    // };
    // fetchData();
  }, []);
  // setTimeout(fetchData(), 1000);

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
        <Ripples
          articles={articles}
          lat={lat}
          lon={lon}
          coords={coords}
          zoom={zoom}
        />
      </Wrapper>
    </>
  );
};

export default App;
