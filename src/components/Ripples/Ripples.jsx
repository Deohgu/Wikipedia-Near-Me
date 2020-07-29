import React from "react";
import styled from "styled-components";

const Ripples = (props) => {
  return (
    <>
      // Why is this not working and getting an error?
      {props.articles.map((curr) => (
        <h1>{curr.title}</h1>
      ))}
    </>
  );
};

export default Ripples;
