import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HeroPageImage from "../../assets/images/HeroPage/hero-page.jpeg";

function Home() {
  const h1ResponsiveFontSize = {
    xs: "2rem",
    sm: "2.5rem",
    md: "3rem",
    lg: "3.5rem",
    xl: "4rem",
  };

  const pResponsiveFontSize = {
    xs: "1rem",
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.6rem",
    xl: "1.8rem",
  };

  return (
    <Box bgcolor={"primary.main"} pb={4}>
      <Grid
        container
        px={{
          xs: 2,
          md: 6,
        }}
        mt={0}
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            fontSize={h1ResponsiveFontSize}
            fontWeight={"400"}
          >
            Find Your Perfect
          </Typography>
          <Typography
            variant="h1"
            fontSize={h1ResponsiveFontSize}
            fontWeight={"400"}
          >
            Uniform with Us
          </Typography>
          <Typography variant="p" fontSize={pResponsiveFontSize}>
            At Uniform Club, we understand the importance of uniforms in making
            a lasting impression. Our extensive collection of uniforms is
            tailored to meet your needs, whether you're a healthcare
            professional, a chef, or in any other profession that requires
            specialized attire.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <img src={HeroPageImage} className="hero-page-image" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
