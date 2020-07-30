import React from "react";
import styled from "styled-components";

const GpsIcon = () => {
  // When run asks for current position and callsback a function and gives it the value as a parameter
  const testing = () => {
    navigator.geolocation.getCurrentPosition(testingOutput);
  };

  // function called in testing which gets data in the parameter from navigator.geolocation.getCurrentPosition
  //And the data is accessed as parameter.coords.latitude.
  const testingOutput = (position) => {
    console.log(position.coords.latitude + " " + position.coords.longitude);
  };

  // onClick runs a function
  return (
    <>
      <button onClick={testing}>GPS</button>
    </>
  );
};

export default GpsIcon;
