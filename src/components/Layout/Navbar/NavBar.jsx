import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import CallBtn from "../../Utils/CallBtn";
import WhatsAppBtn from "../../Utils/WhatsAppBtn";

function NavBar() {
  const navLinkAnimationObj = {
    position: "relative",
    ":after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0%",
      height: "3px",
      backgroundColor: "secondary.main",
      transition: "0.3s ease-in-out",
    },
    ":hover": {
      ":after": {
        width: "100%",
      },
    },
  };

  return (
    <>
      <Box
        mx={"auto"}
        maxWidth={{
          xs: "100%",
          lg: "1200px",
        }}
        py={1}
        px={{
          xs: 2,
          md: 6,
        }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow={"0px 2px 25px 0px #e2e2e254"}
        width={"100%"}
        top={0}
        zIndex={999}
        left={0}
        bgcolor={"white"}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          fontSize={26}
          color={"secondary.main"}
        >
          <img src={logo} width={"70px"} alt="" />
        </Typography>
        <Box
          width={"60%"}
          display={{
            xs: "none",
            sm: "block",
          }}
        ></Box>

        <Stack
          direction={"row"}
          spacing={3}
          alignItems={"center"}
          display={{
            sm: "flex",
            xs: "none",
          }}
        >
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={navLinkAnimationObj}
              color={"secondary.main"}
            >
              Home
            </Typography>
          </NavLink>

          <NavLink to={"/products"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={navLinkAnimationObj}
              fontWeight={600}
              color={"secondary.main"}
            >
              Products
            </Typography>
          </NavLink>
          <NavLink to={"/contact"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={navLinkAnimationObj}
              fontWeight={600}
              color={"secondary.main"}
            >
              Contact
            </Typography>
          </NavLink>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"end"}
          display={{
            sm: "none",
            xs: "flex",
          }}
        >
          <MobileMenu />
        </Stack>
      </Box>
    </>
  );
}

export default NavBar;
