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
  // Being used for testing purposes only.
  const testTest = [
    [38.858494, -9.081971],
    [38.877043, -9.063705],
    [38.87573, -9.044171],
    [38.849149, -9.056733],
  ];

  // Dummy coords to not output an error when receiving an empty bounds.
  //  Side note idea - Can javascript be added before bounds to define if bounds will be given or not?
  let emptyArray = [[29.925994, -39.193599]];

  if (props.articles !== undefined) {
    props.articles.map((curr) => emptyArray.push([curr.lat, curr.lon]));
  }

  // Seems to work only in a separate if statment so be it
  if (emptyArray.length === 11) {
    emptyArray = emptyArray.splice(1);
  }

  // Value seems correct now but it focuses only on one of the values.
  console.log(emptyArray);

  return (
    <MapStyled
      center={props.coords}
      // zoom={props.zoom}
      zoomSnap={0.1}
      // It's working with this!
      bounds={latLngBounds(emptyArray)}
      // Replace with this to confirm that it is working.
      // bounds={latLngBounds(testTest)}
      boundsOptions={{ padding: [40, 40] }}
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
