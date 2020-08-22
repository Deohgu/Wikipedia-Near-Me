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
  // Dummy coords to not output an error when receiving an empty bounds due to async API and sync components.
  let emptyArray = [
    [29.925994, -39.193599],
    [29.945994, -39.143599],
  ];

  if (props.articles !== undefined) {
    props.articles.map((curr) => emptyArray.push([curr.lat, curr.lon]));
  }

  // Seems to work only in a separate if statment so be it
  if (emptyArray.length > 10) {
    emptyArray = emptyArray.splice(1);
    emptyArray = emptyArray.splice(1);
  }

  return (
    <MapStyled
      zoomSnap={0.1}
      bounds={latLngBounds(emptyArray)}
      boundsOptions={{ padding: [40, 40] }}
      // Can I add some padding here too?
      // ctrl-f for maxBounds on the docs.
      maxBounds={latLngBounds(emptyArray)}
      maxBoundsViscosity={1.0}
      zoomControl={false}
    >
      {/* MapStyled = Map component of react-leaflet with styled-components */}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {console.log(props.articles)} */}
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
