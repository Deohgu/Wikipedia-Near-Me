import React, { useEffect, useState } from "react";

import { GlobalStyle, Wrapper } from "./App.styled";

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

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <GpsIcon setLocation={setLocation} />
        <Ripples articles={articles} />
      </Wrapper>
    </>
  );
};

export default App;
