import React from "react";
import styled from "styled-components";

import { Locations } from "./Ripples.styled";

const Ripples = (props) => {
  return (
    <>
      {props.articles !== undefined
        ? props.articles.map((curr, index) => (
            <Locations
              key={index}
              href={
                "https://en.wikipedia.org/wiki/" + curr.title.replace(" ", "_")
              }
            >
              {`${curr.title}     (${curr.lat}, ${curr.lon})     `}
            </Locations>
          ))
        : null}
    </>
  );
};

export default Ripples;
