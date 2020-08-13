import React, { useEffect, useState } from "react";

import { GlobalStyle } from "./App.styled";

import { LeafletMap } from "./components/LeafletMap/LeafletMap";
import { articlesFetch } from "./api";

// To Do
// Adjust zoom to fit all the markers inside the map. Leaflet as a method for it:
// https://leafletjs.com/examples/zoom-levels/
// fitBounds(bounds), automatically calculates the zoom to fit a rectangular area on the map

const App = () => {
  const [articles, setArticles] = useState([]);
  const [coords, setCoords] = useState([15.925994, -37.193399]); // Visually Neutral/Sea
  const [zoom] = useState(15);

  // When run asks for current position and callsback a function giving it the value as a parameter.
  useEffect(() => {
    setTimeout(() => {
      const asyncWrapper = async () => {
        const coordsFetch = () => {
          navigator.geolocation.getCurrentPosition(coordsReceived);
        };
        const coordsReceived = (position) => {
          setCoords([position.coords.latitude, position.coords.longitude]);
        };
        coordsFetch();
      };
      asyncWrapper();
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await articlesFetch(coords[0] + "%7C" + coords[1]);
      setArticles(fetchedData);
    };
    fetchData();
  }, [coords]);

  return (
    <>
      <GlobalStyle />
      <LeafletMap articles={articles} coords={coords} zoom={zoom} />
    </>
  );
};

export default App;
