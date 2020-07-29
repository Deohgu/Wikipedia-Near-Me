import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GpsIcon from "./components/GpsIcon/GpsIcon";
import Ripples from "./components/Ripples/Ripples";
import { apiTesting } from "./api";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      return await apiTesting();
    };
    setArticles(fetchData());
  }, []);

  return (
    <>
      <GpsIcon />
      <Ripples articles={articles} />
    </>
  );
};

export default App;
