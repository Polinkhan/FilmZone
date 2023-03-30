import React, { useEffect, useState } from "react";
import axios from "axios";

const useMovieFetchApi = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.request(config);
        setMovies(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return { movies };
};

export default useMovieFetchApi;

const config = {
  method: "GET",
  url: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "575b3e80b8msh5c737cd4eb9ec8fp19ffbejsn3f6bb637a682",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};
