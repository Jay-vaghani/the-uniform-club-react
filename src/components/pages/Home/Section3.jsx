import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  CorporateUniform,
  HospitalUniform,
  HotelRestaurantUniform,
  HousekeepingUniforms,
  SecurityUniforms,
  TShirt,
  industrialUniform,
} from "../../../assets/Images";
import ProductBtn from "../../Layout/Utils/ProductBtn";
import CallBtn from "../../Layout/Utils/CallBtn";
import ProductSection from "./ProductSection";

function Section3() {
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
      bgcolor={"primary.main"}
      my={4}
      maxWidth={{
        xs: "100%",
        lg: "1200px",
      }}
      px={{
        xs: 2,
        md: 6,
      }}
      py={4}
    >
      <Typography
        variant="h3"
        mb={4}
        textAlign={"center"}
        fontSize={h3ResponsiveFontSize}
      >
        Products
      </Typography>
      <Stack spacing={5}>
        <ProductSection
          image={CorporateUniform}
          infoRight={false}
          title="Corporate Uniform"
          p1=" Discover The Uniform Club, where quality uniforms meet professional
          excellence."
          p2=" Our mission is to provide top-notch uniforms tailored to various
          industries, including corporate settings. We believe that the right
          attire empowers individuals, boosting confidence and performance in
          the workplace."
          p3="Explore our diverse collection today, and experience the difference of
          working with a team dedicated to your success."
        />
        <ProductSection
          image={HospitalUniform}
          infoRight={true}
          title="Hospital Uniform"
          p1=" Discover The Uniform Club, where quality uniforms meet professional
          excellence."
          p2=" Our mission is to provide top-notch uniforms tailored to various
          industries, including corporate settings. We believe that the right
          attire empowers individuals, boosting confidence and performance in
          the workplace."
          p3="Explore our diverse collection today, and experience the difference of
          working with a team dedicated to your success."
        />
        <ProductSection
          image={SecurityUniforms}
          infoRight={false}
          title="Security Uniforms"
          p1=" Discover The Uniform Club, where quality uniforms meet professional
          excellence."
          p2=" Our mission is to provide top-notch uniforms tailored to various
          industries, including corporate settings. We believe that the right
          attire empowers individuals, boosting confidence and performance in
          the workplace."
          p3="Explore our diverse collection today, and experience the difference of
          working with a team dedicated to your success."
        />
        <ProductSection
          image={HousekeepingUniforms}
          infoRight={true}
          title="Housekeeping Uniforms"
          p1=" Discover The Uniform Club, where quality uniforms meet professional
          excellence."
          p2=" Our mission is to provide top-notch uniforms tailored to various
          industries, including corporate settings. We believe that the right
          attire empowers individuals, boosting confidence and performance in
          the workplace."
          p3="Explore our diverse collection today, and experience the difference of
          working with a team dedicated to your success."
        />
        <ProductSection
          image={HotelRestaurantUniform}
          infoRight={false}
          title="Hotel Restaurant Uniform"
          p1=" Discover The Uniform Club, where quality uniforms meet professional
          excellence."
          p2=" Our mission is to provide top-notch uniforms tailored to various
          industries, including corporate settings. We believe that the right
          attire empowers individuals, boosting confidence and performance in
          the workplace."
          p3="Explore our diverse collection today, and experience the difference of
          working with a team dedicated to your success."
        />
        <ProductSection
          image={industrialUniform}
          infoRight={true}
          title="Industrial Uniform"
          p1=" Discover The Uniform Club, where quality uniforms meet professional
          excellence."
          p2=" Our mission is to provide top-notch uniforms tailored to various
          industries, including corporate settings. We believe that the right
          attire empowers individuals, boosting confidence and performance in
          the workplace."
          p3="Explore our diverse collection today, and experience the difference of
          working with a team dedicated to your success."
        />
        <ProductSection
          image={TShirt}
          infoRight={false}
          title="T Shirts"
          p1=" Discover The Uniform Club, where quality uniforms meet professional
          excellence."
          p2=" Our mission is to provide top-notch uniforms tailored to various
          industries, including corporate settings. We believe that the right
          attire empowers individuals, boosting confidence and performance in
          the workplace."
          p3="Explore our diverse collection today, and experience the difference of
          working with a team dedicated to your success."
        />
      </Stack>
    </Box>
  );
}

export default Section3;
