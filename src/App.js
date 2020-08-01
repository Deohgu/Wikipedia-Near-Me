import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GpsIcon from "./components/GpsIcon/GpsIcon";
import Ripples from "./components/Ripples/Ripples";
import { apiTesting } from "./api";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await apiTesting(location);
      setArticles(fetchedData);
    };
    fetchData();
  }, [location]);

  console.log(`location = ${location}`);

  return (
    <>
      <GpsIcon setLocation={setLocation} />
      <Ripples articles={articles} />
    </>
  );
};

export default App;
