import React from "react";
import styled from "styled-components";

const Ripples = (props) => {
  return (
    <>
      {props.articles !== undefined
        ? props.articles.map((curr, index) => (
            <a
              key={index}
              href={
                "https://en.wikipedia.org/wiki/" + curr.title.replace(" ", "_")
              }
            >
              {`${curr.title}     (${curr.lat}, ${curr.lon})     `}
            </a>
          ))
        : null}
    </>
  );
};

export default Ripples;
