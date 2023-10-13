import React, { useState } from "react";
import {
  Close,
  Home,
  Logout,
  Person,
  PersonAddAlt1,
  VpnKey,
  MenuRounded,
  ShoppingCartRounded,
  PersonPin,
  SwitchAccount,
  LocalMall,
  PermPhoneMsgRounded,
} from "@mui/icons-material";
import Button from "@mui/material/Button";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListItemButtonNav from "./ListItemButton";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const drawerFunction = (link) => {
    setOpen(!open);
    navigate(link);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          px: 0,
        }}
      >
        <MenuRounded fontSize="large" sx={{ color: "secondary.main" }} />
      </Button>

      <SwipeableDrawer
        open={open}
        onClose={drawerFunction}
        onOpen={drawerFunction}
        anchor="right"
        disableBackdropTransition={true}
        transitionDuration={{ enter: 700, exit: 700 }}
      >
        <Box
          py={1.5}
          pl={1.3}
          boxShadow={"0px 2px 25px 0px #e2e2e254"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" fontWeight={500}>
            Menu
          </Typography>
          <Button
            disableRipple
            onClick={() => setOpen(!open)}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Close fontSize="large" sx={{ color: "secondary.main" }} />
          </Button>
        </Box>
        <List sx={{ width: "200px" }}>
          <ListItemButtonNav
            link={"/"}
            name="Home"
            drawerFunction={drawerFunction}
            icon={<Home fontSize="medium" sx={{ color: "secondary.main" }} />}
          />
          <ListItemButtonNav
            link={"/"}
            name="Freshline"
            drawerFunction={drawerFunction}
            icon={<SwitchAccount fontSize="medium" sx={{ color: "secondary.main" }} />}
          />
          <ListItemButtonNav
            link={"/"}
            name="About"
            drawerFunction={drawerFunction}
            icon={<Person fontSize="medium" sx={{ color: "secondary.main" }} />}
          />
          <ListItemButtonNav
            link={"/"}
            name="Product"
            drawerFunction={drawerFunction}
            icon={
              <LocalMall
                fontSize="medium"
                sx={{ color: "secondary.main" }}
              />
            }
          />
          <ListItemButtonNav
            link={"/"}
            name="Contact"
            drawerFunction={drawerFunction}
            icon={
              <PermPhoneMsgRounded
                fontSize="medium"
                sx={{ color: "secondary.main" }}
              />
            }
          />
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default MobileMenu;
