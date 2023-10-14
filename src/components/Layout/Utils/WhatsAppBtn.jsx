import { WhatsApp } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

function WhatsAppBtn() {
  return (
    <Box mt={3}>
      <Button
        disableElevation
        href="https://wa.me/7984632774"
        target="_blank"
        variant="contained"
        color="secondary"
        startIcon={<WhatsApp />}
      >
        Whats&nbsp;App
      </Button>
    </Box>
  );
}

export default WhatsAppBtn;
