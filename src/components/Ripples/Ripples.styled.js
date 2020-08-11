import styled, { css } from "styled-components";
import { Map } from "react-leaflet";

const mapWidthMet = 1000;
const mapHeightMet = 2000;

// const mapWidthDeg = (1 * mapWidthMet) / 111.32;

// // need to receive these items (lat and ownLat);
// const positionLatDeg = (lat * mapWidthDeg) / 2 / ownLat;

// const positionLatPx = (positionLatDeg * window.innerWidth) / mapWidthDeg;

// Then do the same for longitude or adapt it to work with both.

// This method of math doesn't seem to work. they all land on top of each other. Meaning that the scale is not adapted. And why are all of the in a similar place? They should be scatered.

export const Locations = styled.a`
  ${(props) => (props.indx === 3 ? "background-color: red;" : null)}
  color: black;
`;

export const MapStyled = styled(Map)`
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
