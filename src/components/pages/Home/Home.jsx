import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HeroPageImage from "../../../assets/images/HeroPage/hero-page.jpeg";
import Section2 from "./Section2";
import Section3 from "./Section3";
import WhatsAppBtn from "../../Utils/WhatsAppBtn";
import CallBtn from "../../Utils/CallBtn";
import Loading from "../../Utils/Loading";

function Home() {
  const h1ResponsiveFontSize = {
    xs: "2rem",
    sm: "2.5rem",
    md: "3rem",
    lg: "3.5rem",
  };

  const pResponsiveFontSize = {
    xs: "1rem",
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.6rem",
  };

  return (
    <>
      <Box bgcolor={"primary.main"} py={4}>
        <Grid
          mx={"auto"}
          maxWidth={{
            xs: "100%",
            lg: "1200px",
          }}
          container
          px={{
            xs: 2,
            md: 6,
          }}
          mt={0}
          rowGap={4}
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
              gutterBottom
            >
              Uniform with Us
            </Typography>
            <Typography variant="p" fontSize={pResponsiveFontSize}>
              At Uniform Club, we understand the importance of uniforms in
              making a lasting impression. Our extensive collection of uniforms
              is tailored to meet your needs, whether you're a healthcare
              professional, a chef, or in any other profession that requires
              specialized attire.
            </Typography>
            <Stack direction={"row"} spacing={2} mt={3}>
              <WhatsAppBtn />
              <CallBtn />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            pl={{
              md: 4,
            }}
            justifyContent={"center"}
          >
            <img
              src={HeroPageImage}
              width={"100%"}
              className="image-border-radius-left-bottom"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
      <Section2 />
      <Section3 />
    </>
  );
}

export default Home;
