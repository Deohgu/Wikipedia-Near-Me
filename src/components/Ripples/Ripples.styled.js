import styled, { css } from "styled-components";

const mapWidthMet = 1000;
const mapHeightMet = 2000;

// const mapWidthDeg = (1 * mapWidthMet) / 111.32;

// // need to receive these items (lat and ownLat);
// const positionLatDeg = (lat * mapWidthDeg) / 2 / ownLat;

// const positionLatPx = (positionLatDeg * window.innerWidth) / mapWidthDeg;

// Then do the same for longitude or adapt it to work with both.

// This method of math doesn't seem to work. they all land on top of each other. But the test in the last bit shows that it could work.
// back to the sketchbook

export const Locations = styled.a`
  ${(props) => (props.indx === 3 ? "background-color: red;" : null)}
  color: black;
  position: absolute;
  left: ${(props) => {
    return (
      (((props.lat * ((1 * mapWidthMet) / 111.32)) / 2 / props.lat) *
        window.innerWidth) /
      ((1 * mapWidthMet) / 111.32)
    );
  }}px;

  ${(props) => {
    return console.log(props.lat);
  }}

  top: ${(props) => {
    return (
      (((props.lon * ((1 * mapHeightMet) / 111.32)) / 2 / props.lon) *
        window.innerHeight) /
      ((1 * mapHeightMet) / 111.32)
    );
  }}px;
  ${console.log(
    (((-1.1743196999999999 * ((1 * mapHeightMet) / 111.32)) /
      2 /
      -1.1743196999999999) *
      736) /
      ((1 * mapHeightMet) / 111.32)
  )};
  
  /* Showing that it works if done right */
  /* top: ${(props) => {
    return props.indx * 30;
  }}px; */
`;
