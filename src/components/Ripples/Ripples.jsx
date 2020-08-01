import React from "react";
import styled from "styled-components";

const Ripples = (props) => {
  return (
    <>
      {console.log(props.articles)}
      {props.articles !== undefined
        ? props.articles.map((curr) => (
            <a
              href={
                "https://en.wikipedia.org/wiki/" + curr.title.replace(" ", "_")
              }
            >
              {curr.title}
            </a>
          ))
        : console.log("Props.articles undefined.")}
    </>
  );
};

export default Ripples;
