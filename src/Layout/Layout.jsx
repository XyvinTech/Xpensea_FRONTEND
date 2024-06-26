import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { LogoutIcon } from "../assets/icons/LogoutIcon";
import { EmailIcon } from "../assets/icons/EmailIcon";
import { PhoneIcon } from "../assets/icons/PhoneIcon";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { XpenseaIcon } from "../assets/icons/XpenseaIcon";
import profile from "../assets/images/profile.png";
import { ExpandMoreIcon } from "../assets/icons/ExpandMoreIcon";
import { DashboardIcon } from "../assets/icons/DashboardIcon";
import { VectorIcon } from "../assets/icons/VectorIcon";
import { EventIcon } from "../assets/icons/EventIcon";
import { AdminIcon } from "../assets/icons/AdminIcon";
import { FinanceIcon } from "../assets/icons/FinanceIcon";
import { StaffIcon } from "../assets/icons/StaffIcon";
import { TierIcon } from "../assets/icons/TierIcon";
import { PolicyIcon } from "../assets/icons/PolicyIcon";
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Collapse,
  Dialog,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StyledSearchbar from "../ui/StyledSearchbar";
import styled from "styled-components";
import { SyncIcon } from "../assets/icons/SyncIcon";
import { useAdminStore } from "../store/adminStore";
import { useAuthStore } from "../store/useAuthStore";
const drawerWidth = 300;
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
const SimpleDialog = ({ open, onClose }) => {
  const { admin, getAdmin, isChange } = useAdminStore();
  const { logoutAuth } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    getAdmin();
  }, [isChange]);
  const handleLogout = () => {
    logoutAuth(navigate);
  };
  console.log("user", admin);
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
              {admin?.name}
            </Typography>
            <Typography variant="h4" color="rgba(41, 45, 50, 0.44)">
              {admin?.designation}
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
            <Typography variant="h4">{admin?.email}</Typography>
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
          onClick={handleLogout}
          sx={{ cursor: "pointer" }}
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

const Layout = (props) => {
  const { admin } = useAdminStore();
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
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

  const drawer = (
    <div>
      <Toolbar sx={{ height: "88px" }}>
        <Box sx={{ display: "flex", alignItems: "center", padding: "15px" }}>
          <XpenseaIcon />
          <Typography variant="h1" sx={{ ml: 1 }}>
            Xpensea
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {subNavigation.map((item) =>
          item.name === "Sub-admin" ? (
            <div key={item.name}>
              <ListItem sx={{ paddingBottom: "8px" }} disablePadding>
                <ListItemButton
                  onClick={handleClick}
                  sx={{
                    color: "#919099",
                    marginLeft: "20px",
                    marginRight: "10px",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#79001D",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      variant: "h3",
                    }}
                  />
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
                          marginLeft: "40px",
                          marginRight: "40px",
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
              sx={{ paddingBottom: "20px" }}
              key={item.name}
              disablePadding
            >
              <StyledListItemButton
                component={Link}
                to={item.to}
                sx={{
                  color: "#919099",
                  marginLeft: "20px",
                  marginRight: "10px",
                  "&:hover": { color: "#fff", backgroundColor: "#79001D" },
                }}
              >
                <ListItemIcon sx={{ minWidth: 24, marginRight: 1 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ variant: "h3" }}
                />{" "}
                <StyledBadge badgeContent={"20"}></StyledBadge>
              </StyledListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: `white`,
          boxShadow: `none`,
        }}
      >
        <Toolbar
          sx={{
            height: "88px",
            justifyContent: "space-between",
            paddingRight: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "flex-start",
              padding: "15px",
            }}
          >
            <IconButton
              color="#000"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h2"
              color="#000"
              noWrap
              component="div"
              display={isMobile && "none"}
            >
              {getCurrentPageName()}
            </Typography>
            <Typography
              variant="h5"
              color={"#BDBDBD"}
              sx={{ display: isMobile ? "none" : "flex", alignItems: "center" }}
            >
              {"Last synced "}
              <span
                style={{
                  color: "#27AE60",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                4 minutes ago
              </span>{" "}
              <SyncIcon />
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box display={isMobile && "none"}>
              {" "}
              <StyledSearchbar />
            </Box>
            <NotificationIcon />
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
              sx={{ cursor: "pointer", flexShrink: 0, marginLeft: "10px" }}
            >
              <Avatar
                alt="Remy Sharp"
                src={profile}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography variant="h5" color={"#292D32"}>
                  {admin?.name}
                </Typography>
                <Typography variant="h6" color={"rgba(41, 45, 50, 0.44)"}>
                  {admin?.designation}
                </Typography>
              </Box>
              <ExpandMoreIcon />
            </Box>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          backgroundColor: "#F3F3F3",
          paddingTop: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>{" "}
      <SimpleDialog open={dialogOpen} onClose={handleDialogClose} />
    </Box>
  );
};

Layout.propTypes = {
  window: PropTypes.func,
};

export default Layout;
const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    right: -3px;
    top: 3px;
    border: 2px solid #79001d;
    padding: 0;
    border-radius: 50%;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    display: flex;
    background-color: #79001d;
    color: #fff;
    align-items: center;
    justify-content: center;
  }
`;
const StyledListItemButton = styled(ListItemButton)`
  width: 100%;
  &:hover {
    .MuiBadge-badge {
      background-color: #fff;
      border: 2px solid #fff;
      color: #79001d;
    }
  }
`;
