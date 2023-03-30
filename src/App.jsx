import { useState } from "react";
import HomePage from "./Route_Pages/HomePage";
import Navbar from "./Components/Navbar";
import MovieListPages from "./Route_Pages/MovieListPages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Navbar />
      {/* <HomePage /> */}
      <MovieListPages />
    </ThemeProvider>
  );
}

export default App;
