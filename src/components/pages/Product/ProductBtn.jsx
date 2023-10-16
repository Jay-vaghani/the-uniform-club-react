import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function ProductBtn() {
  return (
    <div style={{
        maxWidth: "100%",
        overflow: "auto",
    }} className="element-with-scroll">
      <Box
        minWidth={"1200px"}
        display={"flex"}
        justifyContent={"space-between"}
        mt={4}
      >
        <Button  disableElevation variant="contained">
          Corporate Uniform
        </Button>
        <Button  disableElevation variant="contained">
          Hospital Uniform
        </Button>
        <Button  disableElevation variant="contained">
          Hotel Restaurant Uniform
        </Button>
        <Button  disableElevation variant="contained">
          Housekeeping Uniforms
        </Button>
        <Button  disableElevation variant="contained">
          Security Uniforms
        </Button>
        <Button  disableElevation variant="contained">
          Industrial Uniform
        </Button>
      </Box>
    </div>
  );
}

export default ProductBtn;
