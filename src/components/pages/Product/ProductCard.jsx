import { CallRounded, KeyboardDoubleArrowRight } from "@mui/icons-material";
import {
  Button,
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function ProductCard({ image, title }) {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Box className="smooth-shadow-card" borderRadius={4} overflow={"hidden"}>
        <Box>
          <img src={image} width={"100%"} height={"550px"} style={{ objectFit: "cover" }} alt="" />
        </Box>
        <Box p={2}>
          <h2>{title}</h2>
        </Box>
      </Box>
    </Grid>
  );
}

export default ProductCard;
