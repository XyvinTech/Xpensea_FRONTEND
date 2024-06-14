import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
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
import StyledSearchbar from "../ui/StyledSearchbar";
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import profile from "../assets/images/profile.png";
import { ExpandMoreIcon } from "../assets/icons/ExpandMoreIcon";
import { LogoutIcon } from "../assets/icons/LogoutIcon";
import { EmailIcon } from "../assets/icons/EmailIcon";
import { PhoneIcon } from "../assets/icons/PhoneIcon";

const drawerWidth = 301;

const subNavigation = [
  { name: "Dashboard", to: "/", icon: <DashboardIcon /> },
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

const SimpleDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: "fixed",
          top: 50,
          right: 50,
          m: 0,
          height: "330px",
          width: "270px",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.25)",
        },
      }}
    >
      <Stack spacing={2} borderRadius={3} padding="10px" paddingTop={"20px"}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Avatar
            alt="Remy Sharp"
            src={profile}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h3" color="#292D32" paddingBottom={1}>
              Alex Meian
            </Typography>
            <Typography variant="h4" color="rgba(41, 45, 50, 0.44)">
              Product manager
            </Typography>
          </Box>
        </Stack>
        <Divider />
        <Stack spacing={2} padding={1}>
          <Stack
            direction="row"
            spacing={1}
            paddingTop={2}
            paddingBottom={2}
            paddingLeft={1}
            bgcolor={"#F4F4F5"}
          >
            <EmailIcon />
            <Typography variant="h4">Alexmeian45@gmail.com</Typography>
          </Stack>
          <Stack
            direction="row"
            paddingTop={2}
            paddingBottom={2}
            paddingLeft={1}
            spacing={1}
            bgcolor={"#F4F4F5"}
          >
            <PhoneIcon />
            <Typography variant="h4">+91 7452136556</Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <LogoutIcon />
          <Typography variant="h4" color="#F22E22">
            Logout
          </Typography>
        </Stack>
      </Stack>
    </Dialog>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const getCurrentPageName = () => {
    for (const item of subNavigation) {
      if (item.to === location.pathname) {
        return item.name;
      }
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.to === location.pathname) {
            return subItem.name;
          }
        }
      }
    }
    return "Dashboard";
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />

       
        <AppBar position="static">
          <Toolbar sx={{ height: "88px", bgcolor: "#ffffff", justifyContent: "space-between" }}>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography color="#000" variant="h2" noWrap component="div">
                {getCurrentPageName()}
              </Typography>
            </Box>
            <StyledSearchbar />
            <Box sx={{ mx: 2 }}>
              <NotificationIcon />
            </Box>
            <Box
              borderRadius="24px"
              padding={"5px 20px 5px 5px"}
              border={"1px solid rgba(0, 0, 0, 0.12)"}
              width={"200px"}
              color={"#000"}
              gap={1}
              display={"flex"}
              alignItems={"center"}
              onClick={handleDialogOpen}
              sx={{ cursor: "pointer" }}
            >
              <Avatar
                alt="Remy Sharp"
                src={profile}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography variant="h5" color={"#292D32"}>
                  Alex meian
                </Typography>
                <Typography variant="h6" color={"rgba(41, 45, 50, 0.44)"}>
                  Product manager
                </Typography>
              </Box>
              <ExpandMoreIcon />
            </Box>
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
                              marginLeft: "50px",
                              marginRight: "60px",
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
      <SimpleDialog open={dialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default Layout;