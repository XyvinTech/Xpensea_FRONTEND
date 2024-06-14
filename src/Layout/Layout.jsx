import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { XpenseaIcon } from "../assets/icons/XpenseaIcon";
import { DashboardIcon } from "../assets/icons/DashboardIcon";
import { VectorIcon } from "../assets/icons/VectorIcon";
import { EventIcon } from "../assets/icons/EventIcon";
import { AdminIcon } from "../assets/icons/AdminIcon";
import { FinanceIcon } from "../assets/icons/FinanceIcon";
import { StaffIcon } from "../assets/icons/StaffIcon";
import { TierIcon } from "../assets/icons/TierIcon";
import { PolicyIcon } from "../assets/icons/PolicyIcon";

const drawerWidth = 240;

const subNavigation = [
  { name: "Dashboard", to: "/dashboard", icon: <DashboardIcon /> },
  { name: "Approvals", to: "/approvals", icon: <VectorIcon /> },
  { name: "Events", to: "/events", icon: <EventIcon /> },
  {
    name: "Sub-admin",
    icon: <AdminIcon />,
    subItems: [
      { name: "Admin Management", to: "/subadmin/admin-management" },
      { name: "Role Management", to: "/subadmin/role-management" },
      { name: "Admin Activity", to: "/subadmin/admin-activity" },
    ],
  },
  { name: "Finance", to: "/finance", icon: <FinanceIcon /> },
  { name: "Staffs", to: "/staffs", icon: <StaffIcon /> },
  { name: "Tier", to: "/tier", icon: <TierIcon /> },
  { name: "Policy", to: "/policy", icon: <PolicyIcon /> },
];

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            background: `white`,
            boxShadow: `none`,
          }}
        >
          <Toolbar sx={{ height: "88px", bgcolor: "#fff" }}>
            <Typography color="#000" variant="h2" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar sx={{ height: "88px" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", padding: "15px" }}
            >
              <XpenseaIcon />
              <Typography variant="h1" sx={{ ml: 1 }}>
                Xpensea
              </Typography>
            </Box>
          </Toolbar>

          <Divider />

          <List sx={{ paddingLeft: "5px" }}>
            {subNavigation.map((item) =>
              item.name === "Sub-admin" ? (
                <div key={item.name}>
                  <ListItem sx={{ paddingBottom: "8px" }} disablePadding>
                  <ListItemButton
                      onClick={handleClick}
                      sx={{
                        color: "#919099",
                        "&:hover": {
                          color: "#fff",
                          backgroundColor: "#79001D",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{ marginRight: "0", paddingLeft: "20px" }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={open}>
                    <List component="div">
                      {item.subItems.map((subItem) => (
                        <ListItem
                          key={subItem.name}
                          sx={{ paddingBottom: "8px" }}
                          disablePadding
                        >
                          <ListItemButton
                            component={Link}
                            to={subItem.to}
                            sx={{
                              color: "#4D515A",
                             paddingLeft: "50px",
                              paddingRight: "60px",
                              "&:hover": {
                                color: "#79001D",
                                backgroundColor: "#FFF7F3",
                                border: "1px solid #79001D ",
                              },
                            }}
                          >
                            <ListItemText
                              primary={subItem.name}
                              primaryTypographyProps={{
                                variant: "h4",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </div>
              ) : (
                <ListItem
                  sx={{ paddingBottom: "8px" }}
                  key={item.name}
                  disablePadding
                >
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#919099",
                      "&:hover": { color: "#fff", backgroundColor: "#79001D" },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        marginRight: "0",
                        paddingLeft: "20px",
                        "&:hover": {
                          "& svg": { color: "#fff" },
                        },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        variant: "h3",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F7F7F7", p: 6 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;