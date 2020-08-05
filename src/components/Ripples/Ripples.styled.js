import styled from "styled-components";

const mapWidthMet = 1000;

const mapWidthDeg = (1 * mapWidthMet) / 111.32;

// need to receive these items (lat and ownLat);
const positionLatDeg = (lat * mapWidthDeg/2) / ownLat;

const positionLatPx = (positionLatDeg * window.innerWidth) / mapWidthDeg;

// Then do the same for longitude or adapt it to work with both.

export const Locations = styled.a`
  color: black;
  /* position: absolute;
  right: ${(props) => {
    calc(
      ((((props.lat * ((1 * mapWidthMet) / 111.32)/2)/props.lat)*100vw)/((1 * mapWidthMet) / 111.32))
    )
  }};
  top: ${(props) =>  positionPx + "px"}; */
`;
