import { CallRounded, KeyboardDoubleArrowRight } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function ProductCard({image, title}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        elevation={"3"}
        sx={{
          boxShadow: "3px 3px 8px #e4e4e4b0",
        }}
      >
        <CardMedia
          sx={{
            height: "200px",
            p: 3,
          }}
        >
          <img
            src={image}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" fontWeight={"500"}>
            {title}
          </Typography>

          <CardActions
            sx={{
              px: 0,
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <Button
                variant="contained"
                disableElevation
                href="tel:7984632774"
                startIcon={<CallRounded />}
              >
                Call&nbsp;TO&nbsp;Buy
              </Button>
              <Button
                variant="contained"
                disableElevation
                endIcon={<KeyboardDoubleArrowRight />}
              >
                view
              </Button>
            </Stack>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCard;
