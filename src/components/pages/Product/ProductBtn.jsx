import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function ProductBtn() {
  return (
    <Stack
      gap={1}
      direction={"row"}
      flexWrap={"wrap"}
      position={"sticky"}
      width={{
        xs: "1350px",
        md: "100%",
      }}
      top={0}
      left={0}
      zIndex={999}
      bgcolor={"#fff"}
    >
      <Button disableElevation variant="contained">
        Corporate Uniform
      </Button>
      <Button disableElevation variant="contained">
        Hospital Uniform
      </Button>
      <Button disableElevation variant="contained">
        Hotel Restaurant Uniform
      </Button>
      <Button disableElevation variant="contained">
        Housekeeping Uniforms
      </Button>
      <Button disableElevation variant="contained">
        Security Uniforms
      </Button>
      <Button disableElevation variant="contained">
        Industrial Uniform
      </Button>
      <Button disableElevation variant="contained">
        T Shirts
      </Button>
    </Stack>
  );
}
export default ProductBtn;
