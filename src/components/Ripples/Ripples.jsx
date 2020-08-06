import React from "react";
import styled from "styled-components";

import { Locations } from "./Ripples.styled";

const Ripples = (props) => {
  return (
    <>
      <h1 style={{ margin: 0 }}>{`${props.lat} ${props.lon}`}</h1>
      {props.articles !== undefined
        ? props.articles.map((curr, index) => (
            <Locations
              key={index}
              indx={index}
              href={
                "https://en.wikipedia.org/wiki/" + curr.title.replace(" ", "_")
              }
              lat={curr.lat}
              lon={curr.lon}
            >
              {`${curr.title}     (${curr.lat}, ${curr.lon})     `}
            </Locations>
          ))
        : null}
    </>
  );
};

export default Ripples;
