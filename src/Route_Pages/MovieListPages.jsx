import { Box, Container } from "@mui/system";
import React from "react";
import Card from "../Components/Card";
import useMovieFetchApi from "../hooks/useMovieFetchApi";

const MovieListPages = () => {
  const { movies } = useMovieFetchApi();
  return (
    <Box sx={{ background: "#1d1e22", background: "#1d1e22" }}>
      <Container maxWidth="xl" sx={{ paddingTop: 12, height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            // flexFlow: "column wrap",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "space-between",
          }}
        >
          <Card data={movies[0]} />
          <Card data={movies[1]} />
          <Card data={movies[2]} />
          <Card data={movies[3]} />
          <Card data={movies[4]} />
          <Card data={movies[5]} />
          <Card data={movies[6]} />
          <Card data={movies[7]} />
          <Card data={movies[8]} />
          <Card data={movies[9]} />
          <Card data={movies[10]} />
          <Card data={movies[11]} />
          <Card data={movies[12]} />
          <Card data={movies[13]} />
          <Card data={movies[14]} />
          <Card data={movies[15]} />
          <Card data={movies[16]} />
          <Card data={movies[17]} />
          <Card data={movies[18]} />
          <Card data={movies[19]} />
        </Box>
      </Container>
    </Box>
  );
};

export default MovieListPages;
