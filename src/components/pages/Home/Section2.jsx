import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AboutUsImage from "../../../assets/images/AboutUs/About_Us.jpg"


function Section2() {
  const h3ResponsiveFontSize = {
    xs: "2rem",
    sm: "2.5rem",
    md: "3rem",
  };

  const h4ResponsiveFontSize = {
    xs: "1.7rem",
    sm: "1.8rem",
    md: "2rem",
  };

  return (
    <Box
      mx={"auto"}
      my={4}
      maxWidth={{
        xs: "100%",
        lg: "1200px",
      }}
      px={{
        xs: 2,
        md: 6,
      }}
    >
      <Typography
        variant="h3"
        mb={4}
        textAlign={"center"}
        fontSize={h3ResponsiveFontSize}
      >
        About Us
      </Typography>

      <Grid container rowGap={3}>
        <Grid
          item
          xs={12}
          md={6}
          pr={{
            md: 4,
          }}
        >
          <img
            src={AboutUsImage}
            alt=""
            className="image-border-radius-right-bottom"
            width={"100%"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" mb={4} fontSize={h4ResponsiveFontSize}>
            Providing Quality Uniforms for Every Occasion
          </Typography>
          <Typography variant="subtitle1" mb={3}>
            Welcome to The Uniform Club, where we take pride in being your
            trusted source for high-quality uniforms. As a leader in the uniform
            industry, we are dedicated to offering a diverse range of attire
            that suits every professional need.
          </Typography>
          <Typography variant="subtitle1" mb={3}>
            Our mission is to provide uniforms that are not only functional but
            also stylish and comfortable. We understand the significance of
            professional attire and believe that it should empower you in your
            work.
          </Typography>
          <Typography variant="subtitle1" mb={3}>
            At The Uniform Club, we're more than just uniform providers; we're
            your partners in success. Our commitment to quality, style, and
            customer satisfaction is what defines us.
          </Typography>
          <Typography variant="subtitle1" mb={3}>
            Explore our extensive collection of uniforms today and experience
            the difference of working with The Uniform Club. We look forward to
            being a part of your journey to success.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Section2;
