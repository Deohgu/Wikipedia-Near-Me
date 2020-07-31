import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GpsIcon from "./components/GpsIcon/GpsIcon";
import Ripples from "./components/Ripples/Ripples";
import { apiTesting } from "./api";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [location, setLocation] = useState("");
  const [dummy, setDummy] = useState("");

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
      <GpsIcon setLocation={setLocation} testDisplay={setDummy} />
      <Ripples articles={articles} dummy={dummy} />
    </>
  );
};

export default App;
