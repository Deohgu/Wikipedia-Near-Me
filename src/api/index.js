// gscoord=41.118277%7C-8.027207
// | = %7C

export const apiTesting = async (location) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=${location}&gsradius=10000&gslimit=20&gsnamespace=0&origin=*`;

  // const articles = [];

  // IIFE to contain the fetch and fill in the array outside of it.
  // Not sure if I need to pass to articles here, remains to be seen later.
  // It wasn't working because of this IIFE
  // (async () => {
  if (location !== "") {
    const fetchData = await fetch(url);
    const {
      query: { geosearch },
    } = await fetchData.json();
    console.log(geosearch);
    return geosearch;
  }
  // })();
};
