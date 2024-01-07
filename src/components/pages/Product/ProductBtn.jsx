import { Box, Button, Stack, Typography, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductBtn() {
  const [value, setValue] = useState("Corporate Uniform");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate()

  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">
      <Tab label="Corporate Uniform" value={"Corporate Uniform"}  onClick={() => navigate("corporate-uniform")}/>
      <Tab label="Housekeeping Uniforms" value={"Housekeeping Uniforms"}  onClick={() => navigate("housekeeping-uniforms")}/>
      <Tab label="Hotel Restaurant Uniform" value={"Hotel Restaurant Uniform"}  onClick={() => navigate("hotel-restaurant-uniform")}/>
      <Tab label="Security Uniforms" value={"Security Uniforms"}  onClick={() => navigate("security-uniforms")}/>
      <Tab label="Industrial Uniform" value={"Industrial Uniform"}  onClick={() => navigate("industrial-uniform")}/>
      <Tab label="Hospital Uniform" value={"Hospital Uniform"}  onClick={() => navigate("hospital-uniform")}/>
      <Tab label="T Shirts" value={"T Shirts"}  onClick={() => navigate("t-shirts")}/>
    </Tabs>
  );
}
export default ProductBtn;
