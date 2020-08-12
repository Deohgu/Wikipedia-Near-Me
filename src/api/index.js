export const apiTesting = async (location) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=${location}&gsradius=10000&gslimit=10&gsnamespace=0&origin=*`;

  if (location !== "%7C") {
    const fetchData = await fetch(url);
    const {
      query: { geosearch },
    } = await fetchData.json();
    console.log(geosearch);
    return geosearch;
  }
};

export const locationAPI = () => {
  let testCoords = ["empty"];

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
    console.log(position.coords.latitude);
    testCoords = [position.coords.latitude, position.coords.longitude];
    console.log(testCoords);
  };
  testing();
  console.log(`Last Log - ${testCoords}`);
  return testCoords;
};
