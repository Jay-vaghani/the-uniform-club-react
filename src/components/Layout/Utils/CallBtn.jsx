import { CallRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

function CallBtn() {
  return (
    <Box mt={3}>
      <Button
        disableElevation
        href="tel:7984632774"
        target="_blank"
        variant="contained"
        color="secondary"
        startIcon={<CallRounded />}
      >
        Call&nbsp;Me
      </Button>
    </Box>
  );
}

export default CallBtn;
