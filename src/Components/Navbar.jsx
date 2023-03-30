import { Box, Container } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Icon, TextField } from "@mui/material";

const Navbar = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "fixed",
        left: "50%",
        transform: "translateX( -50%)",
        justifyContent: "center",
        zIndex: 1,
        background: "#1d1e22",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: 1,
          paddingY: 2,
        }}
      >
        <Box
          sx={{
            gridRow: "1",
            gridColumn: "span 3",
            display: "grid",
            gridAutoColumns: "1fr",
            gap: 1,
          }}
        >
          <Box
            sx={{
              gridRow: "1",
              gridColumn: "span 1",
              fontWeight: 700,
              fontSize: 30,
            }}
          >
            Film{" "}
            <Box
              sx={{
                color: "#FF0250",
                display: "inline-block",
              }}
            >
              Zone
            </Box>
          </Box>
          <Box
            sx={{
              gridRow: "1",
              gridColumn: "span 3",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                fontWeight: 500,
              }}
            >
              <Box>Home</Box>
              <Box>Movies</Box>
              <Box>News</Box>
              <Box>Blog</Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ gridRow: "1", gridColumn: "span 1" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
            }}
          >
            <SearchIcon />
            <TextField variant="standard" placeholder="Search ..." />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
