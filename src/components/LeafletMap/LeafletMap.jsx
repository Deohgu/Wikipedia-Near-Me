import React from "react";
import L, { latLngBounds } from "leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";

import { MapStyled } from "./LeafletMap.styled";

const myIcon = L.icon({
  iconUrl: "https://image.flaticon.com/icons/svg/49/49360.svg",
  iconSize: [35, 35],
  popupAnchor: [0, -20],
});

export const LeafletMap = (props) => {
  const testTest = [
    [38.858494, -9.081971],
    [38.877043, -9.063705],
    [38.87573, -9.044171],
    [38.849149, -9.056733],
  ];

  const emptyArray = [
    props.articles !== undefined
      ? props.articles.map((curr) => [curr.lat, curr.lon])
      : null,
  ];
  console.log(emptyArray);

  return (
    <MapStyled
      // center={props.coords}
      // zoom={props.zoom}
      // It's working with this!
      bounds={latLngBounds(emptyArray)}
      // Replace with this to confirm that it is working.
      // bounds={latLngBounds(testTest)}
      // boundsOptions={{padding: [50, 50]}}
    >
      {/* MapStyled = Map component of react-leaflet */}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {console.log(props.articles)}
      {props.articles !== undefined
        ? props.articles.map((curr, index) => (
            <Marker
              position={[curr.lat, curr.lon]}
              key={"coords" + index}
              icon={myIcon}
            >
              <Popup>
                <a href={"https://en.wikipedia.org/wiki/" + curr.title}>
                  {curr.title}
                </a>
              </Popup>
            </Marker>
          ))
        : null}
    </MapStyled>
  );
};
