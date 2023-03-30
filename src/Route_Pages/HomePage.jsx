import { Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image from "../assets/images/background.jpg";

const HomePage = () => {
  return (
    <Box className="homeContainer">
      <Container maxWidth="xl" sx={{ paddingTop: 10, height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            color: "white",
            height: "100%",
          }}
        >
          <Box sx={{ flex: 5 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  flex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  fontSize: 80,
                }}
              >
                <Box>Spider Man:</Box>
                <Box>NO WAY HOME</Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderTopRightRadius: 50,
                  borderTopLeftRadius: 50,
                }}
              >
                dsfsdf
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 2 }}>sdfsdf</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
