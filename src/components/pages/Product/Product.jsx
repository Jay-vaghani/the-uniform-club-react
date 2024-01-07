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
import { Outlet } from "react-router-dom";

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
      <Grid container mt={3} spacing={2}>
        <Outlet />
      </Grid>
    </Box>
  );
}

export default Product;
