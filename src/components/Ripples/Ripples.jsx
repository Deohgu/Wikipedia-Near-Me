import React from "react";
import L from "leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";

import { MapStyled } from "./Ripples.styled";

const myIcon = L.icon({
  iconUrl: "https://image.flaticon.com/icons/svg/49/49360.svg",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const Ripples = (props) => {
  return (
    <MapStyled center={props.coords} zoom={props.zoom}>
      {/* MapStyled === Map of react-leaflet */}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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

export default Ripples;
