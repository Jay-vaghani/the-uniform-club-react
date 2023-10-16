import React from "react";
import ProductBtn from "./ProductBtn";
import { Box, Grid, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import {
  SecurityUniforms1,
  corporateUniform1,
  hospitalUniform1,
  hotelRestaurantUniform1,
  housekeepingUniforms1,
  industrialUniform1,
} from "../../../assets/Images";

function Product() {
  return (
    <Box
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
    >
      <Stack width={"100%"} overflow={"auto"} className="container">
        <ProductBtn />
      </Stack>
      <Grid container mt={3} spacing={1}>
        <ProductCard
          title="Security Uniform 1"
          image={SecurityUniforms1}
          link
        />
        <ProductCard
          title="Security Uniform 1"
          image={SecurityUniforms1}
          link
        />
        <ProductCard title="Hospital Uniform 1" image={hospitalUniform1} link />
        <ProductCard title="Hospital Uniform 1" image={hospitalUniform1} link />
        <ProductCard
          title="Corporate Uniform 1"
          image={corporateUniform1}
          link
        />
        <ProductCard
          title="Corporate Uniform 1"
          image={corporateUniform1}
          link
        />
        <ProductCard
          title="Corporate Uniform 1"
          image={housekeepingUniforms1}
          link
        />
        <ProductCard
          title="Housekeeping Uniforms"
          image={housekeepingUniforms1}
          link
        />
        <ProductCard
          title="Industrial Uniform"
          image={industrialUniform1}
          link
        />
        <ProductCard
          title="Industrial Uniform"
          image={industrialUniform1}
          link
        />
        <ProductCard
          title="Hotel Restaurant Uniform"
          image={hotelRestaurantUniform1}
          link
        />
        <ProductCard
          title="Hotel Restaurant Uniform"
          image={hotelRestaurantUniform1}
          link
        />
      </Grid>
    </Box>
  );
}

export default Product;
