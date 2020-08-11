import React from "react";
import styled from "styled-components";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { Locations, MapStyled } from "./Ripples.styled";

const Ripples = (props) => {
  return (
    <Map style={{ height: 100 + "vh" }}>
      <h1 style={{ margin: 0 }}>{`${props.lat} ${props.lon}`}</h1>
      {props.articles !== undefined
        ? props.articles.map((curr, index) => (
            <Locations
              key={index}
              indx={index}
              href={
                "https://en.wikipedia.org/wiki/" + curr.title.replace(" ", "_")
              }
              articleLat={curr.lat}
              articleLon={curr.lon}
              lat={props.lat}
              lon={props.lon}
            >
              {`${curr.title}     (${curr.lat}, ${curr.lon})     `}
            </Locations>
          ))
        : null}
    </Map>
  );
};

export default Ripples;
