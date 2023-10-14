import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductBtn() {
  let navigation = useNavigate();

  return (
    <Box mt={3}>
      <Button
        disableElevation
        variant="contained"
        color="secondary"
        endIcon={<KeyboardDoubleArrowRight />}
        onClick={() => navigation("/products")}
      >
        See More
      </Button>
    </Box>
  );
}

export default ProductBtn;
