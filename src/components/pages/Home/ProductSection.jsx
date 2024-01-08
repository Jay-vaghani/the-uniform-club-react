import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CallBtn from "../../Utils/CallBtn";
import ProductBtn from "../../Utils/ProductBtn";

function ProductSection({ image, infoRight, title, p1, p2, p3, link }) {
  const h4ResponsiveFontSize = {
    xs: "1.7rem",
    sm: "1.8rem",
    md: "2rem",
  };

  return (
    <>
      <Grid container rowGap={3}>
        <Grid
          order={{
            md: infoRight ? 1 : "",
          }}
          item
          xs={12}
          md={6}
          pr={{
            md: 4,
          }}
          overflow={"hidden"}
        >
          <img
            src={image}
            alt=""
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            gutterBottom
            fontSize={h4ResponsiveFontSize}
            fontWeight={"500"}
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" mb={1}>
            {p1}
          </Typography>
          <Typography variant="subtitle1" mb={1}>
            {p2}
          </Typography>
          <Typography variant="subtitle1" mb={1}>
            {p3}
          </Typography>
          <Stack direction={"row"} spacing={2} mt={3}>
            <CallBtn />
            <ProductBtn link={link} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductSection;
