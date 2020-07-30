import React from "react";
import styled from "styled-components";

const Ripples = (props) => {
  return (
    <>
      {console.log(props.articles)}
      { props.articles.map((curr) => (
          <h1>{curr.title}</h1>
        ))}
    </>
  );
};

export default Ripples;