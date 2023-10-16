import { Box, CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Box width={"100%"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} position={"absolute"} top={0} left={0}>
      <CircularProgress  size={100}/>
    </Box>
  );
}

export default Loading;
