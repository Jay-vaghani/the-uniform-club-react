import React from "react";
import ProductBtn from "./ProductBtn";
import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { SecurityUniforms1, hospitalUniform1 } from "../../../assets/Images";

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
      <ProductBtn />
      <Grid container mt={3} spacing={1}>
        <ProductCard title="Security Uniform 1" image={SecurityUniforms1} link/>
        <ProductCard title="Security Uniform 1" image={SecurityUniforms1} link/>
        <ProductCard title="Hospital Uniform 1" image={hospitalUniform1} link/>
        <ProductCard title="Hospital Uniform 1" image={hospitalUniform1} link/>
      </Grid>
    </Box>
  );
}

export default Product;
