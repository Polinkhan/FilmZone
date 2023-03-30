import { Rating, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useInView } from "react-intersection-observer";

const Card = ({ data }) => {
  const { ref, inView, entry } = useInView({ threshold: 0, triggerOnce: true });
  console.log(data?.rank, inView);
  return (
    <Box
      ref={ref}
      className="Card"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 250,
      }}
    >
      {data ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <img className="image" style={{}} src={data.image} on />
            </Box>
            <Box
              className="hoverBox"
              sx={{
                position: "absolute",
                bottom: 0,
                opacity: 0,
                width: "100%",
                height: "0%",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  display: "flex",
                  gap: 2,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>Rating - {data.rating}</Box>
                <Rating
                  name="read-only"
                  precision={0.1}
                  value={data.rating / 2}
                  readOnly
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                background: "#FF0250",
                width: 80,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 999,
                fontWeight: 500,
                fontSize: 15,
                bottom: 20,
                right: -20,
              }}
            >
              Rank {data.rank}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 1,
            }}
          >
            <Box>{data.title}</Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>{data.genre}</Box>
              <Box sx={{ color: "gray" }}>{data.year}</Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          {/* <Skeleton
            sx={{ height: "100%" }}
            animation="wave"
            variant="rectangular"
          /> */}
        </>
      )}
    </Box>
  );
};

export default Card;
