import React from "react";
import { Icon } from "./GpsIcon.styled";

// Next thing is to check out the Geolocation.watchPosition() for the heading option to see if the compass would work.
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition

const GpsIcon = (props) => {
  // When run asks for current position and callsback a function and gives it the value as a parameter
  const testing = () => {
    navigator.geolocation.getCurrentPosition(testingOutput);
  };

  // function called in testing which gets data in the parameter from navigator.geolocation.getCurrentPosition
  //And the data is accessed as parameter.coords.latitude.
  const testingOutput = (position) => {
    console.log(
      `Latitude = ${position.coords.latitude}, Longitude = ${position.coords.longitude}, Facing = ${position.coords.heading}`
    );
    props.setLocation(
      position.coords.latitude + "%7C" + position.coords.longitude
    );
  };

  // onClick runs a function
  return (
    <>
      <Icon onClick={testing}>GPS</Icon>
    </>
  );
};

export default GpsIcon;
