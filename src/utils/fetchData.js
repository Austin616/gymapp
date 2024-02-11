export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c397e9244fmsh0684449f9d3c3c4p16e671jsndff76d7784df",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c397e9244fmsh0684449f9d3c3c4p16e671jsndff76d7784df",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
