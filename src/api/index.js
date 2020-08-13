export const articlesFetch = async (location) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=${location}&gsradius=10000&gslimit=10&gsnamespace=0&origin=*`;

  // Not to fetch dummy location articles
  if (location !== 15.925994 + "%7C" + -37.193399) {
    const fetchData = await fetch(url);
    const {
      query: { geosearch },
    } = await fetchData.json();
    // console.log(geosearch);
    return geosearch;
  }
};
