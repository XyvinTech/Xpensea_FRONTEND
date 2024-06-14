import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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
import StyledSearchbar from "../ui/StyledSearchbar";
import { NotificationIcon } from "../assets/icons/NotificationIcon";

const drawerWidth = 240;

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

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getCurrentPageName = () => {
    for (const item of subNavigation) {
      if (item.to === window.location.pathname) {
        return item.name;
      }
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.to === window.location.pathname) {
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
                  <ListItemIcon sx={{ marginRight: "0", paddingLeft: "20px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={open}>
                <List component="div">
                  {item.subItems.map((subItem) => (
                    <ListItem key={subItem.name} sx={{ paddingBottom: "8px" }} disablePadding>
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
                          primaryTypographyProps={{ variant: "h4" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ) : (
            <ListItem sx={{ paddingBottom: "8px" }} key={item.name} disablePadding>
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
                  primaryTypographyProps={{ variant: "h3" }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background: `white`,
            boxShadow: `none`,
          }}
        >
          <Toolbar sx={{ height: "88px", bgcolor: "#fff", display: 'flex', justifyContent: 'space-between' }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography color="#000" variant="h2" noWrap component="div">
              {getCurrentPageName()}
            </Typography>
            <StyledSearchbar sx={{ flexGrow: 1, mx: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NotificationIcon sx={{ mr: 2 }} />
              <Box
                borderRadius="24px"
                padding={"5px 20px 5px 5px"}
                border={"1px solid rgba(0, 0, 0, 0.12)"}
                width={"200px"}
                color={"#000"}
                gap={1}
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer", flexShrink: 0 }}
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
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F7F7F7", p: 6 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
