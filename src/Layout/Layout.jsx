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
import GridViewIcon from "@mui/icons-material/GridView";
// import { VectorIcon } from "../assets/icons/VectorIcon"
import PendingActionsIcon from "@mui/icons-material/PendingActions";
// import { EventIcon } from "../assets/icons/EventIcon";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import { AdminIcon } from "../assets/icons/AdminIcon";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import { StaffIcon } from "../assets/icons/StaffIcon";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentIcon from "@mui/icons-material/Payment";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import PolicyIcon from "@mui/icons-material/Policy";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Collapse,
  Dialog,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StyledSearchbar from "../ui/StyledSearchbar";
import { SyncIcon } from "../assets/icons/SyncIcon";
import { useAdminStore } from "../store/adminStore";
import { useAuthStore } from "../store/useAuthStore";
import { Controller, useForm } from "react-hook-form";
import StyledInput from "../ui/StyledInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import StyledButton from "../ui/StyledButton";
import { changePassword } from "../api/adminapi";
const drawerWidth = 250;

const subNavigation = [
  { name: "Dashboard", to: "/dashboard", icon: <GridViewIcon /> },
  {
    name: "Approvals",
    to: "/approvals",
    icon: <PendingActionsIcon />,
    permissions: ["approvalManagement_view", "approvalManagement_modify"],
  },
  {
    name: "Events",
    to: "/events",
    icon: <EventAvailableIcon />,
    permissions: ["eventManagement_view", "eventManagement_modify"],
  },
  {
    name: "Sub-admin",
    icon: <SupervisorAccountIcon />,
    subItems: [
      {
        name: "Admin Management",
        to: "/subadmin/admin-management",
        permissions: ["adminManagement_view", "adminManagement_modify"],
      },
      {
        name: "Role Management",
        to: "/subadmin/role-management",
        permissions: ["roleManagement_view", "roleManagement_modify"],
      },
      {
        name: "Admin Activity",
        to: "/subadmin/admin-activity",
        permissions: [],
      },
    ],
  },
  {
    name: "Finance",
    to: "/finance",
    icon: <AccountBalanceIcon />,
    permissions: ["financeManagement_view", "financeManagement_modify"],
  },
  {
    name: "Transactions",
    to: "/transactions",
    icon: <PaymentIcon />,
    permissions: ["financeManagement_view", "financeManagement_modify"],
  },
  {
    name: "Staffs",
    to: "/staffs",
    icon: <GroupsIcon />,
    permissions: ["userManagement_view", "userManagement_modify"],
  },
  {
    name: "Tier",
    to: "/tier",
    icon: <AlignVerticalBottomIcon />,
    permissions: ["tierManagement_view", "tierManagement_modify"],
  },
  {
    name: "Policy",
    to: "/policy",
    icon: <PolicyIcon />,
    permissions: ["policyManagement_view", "policyManagement_modify"],
  },
  {
    name: "Support",
    to: "/support",
    icon: <SupportAgentIcon />,
    permissions: ["policyManagement_view", "policyManagement_modify"],
  },
];

const filterNavigation = (navItems, permissions) => {
  return navItems.reduce((acc, item) => {
    if (
      !item.permissions ||
      item.permissions.some((permission) => permissions.includes(permission))
    ) {
      if (item.subItems) {
        const filteredSubItems = filterNavigation(item.subItems, permissions);
        if (filteredSubItems.length > 0) {
          acc.push({ ...item, subItems: filteredSubItems });
        }
      } else {
        acc.push(item);
      }
    }
    return acc;
  }, []);
};

const ChangePasswordDialog = ({ open, onClose }) => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      return;
    }

    try {
      await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword
      });
      reset();
      onClose();
    } catch (error) {
      console.error("Password change failed", error);
    }
  };

  const handleClickShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: "400px",
            padding: "20px",
            borderRadius: "10px",
          },
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Change Password
        </Typography>
        <Divider sx={{ my: 2 }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="oldPassword"
              control={control}
              rules={{ required: "Old password is required" }}
              render={({ field }) => (
                <StyledInput
                  {...field}
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Old Password"
                  endIcon={
                    showOldPassword ? (
                      <Visibility onClick={handleClickShowOldPassword} />
                    ) : (
                      <VisibilityOff onClick={handleClickShowOldPassword} />
                    )
                  }
                />
              )}
            />
            {errors.oldPassword && (
              <Typography color="error">
                {errors.oldPassword.message}
              </Typography>
            )}

            <Controller
              name="newPassword"
              control={control}
              rules={{
                required: "New password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <StyledInput
                  {...field}
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  endIcon={
                    showNewPassword ? (
                      <Visibility onClick={handleClickShowNewPassword} />
                    ) : (
                      <VisibilityOff onClick={handleClickShowNewPassword} />
                    )
                  }
                />
              )}
            />
            {errors.newPassword && (
              <Typography color="error">
                {errors.newPassword.message}
              </Typography>
            )}

            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm password is required",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              }}
              render={({ field }) => (
                <StyledInput
                  {...field}
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  endIcon={
                    showConfirmPassword ? (
                      <Visibility onClick={handleClickShowConfirmPassword} />
                    ) : (
                      <VisibilityOff onClick={handleClickShowConfirmPassword} />
                    )
                  }
                />
              )}
            />
            {errors.confirmPassword && (
              <Typography color="error">
                {errors.confirmPassword.message}
              </Typography>
            )}

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <StyledButton
                name="Cancel"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  reset();
                }}
              />
              <StyledButton name="Save" variant="primary" type="submit" />
            </Stack>
          </Stack>
        </form>
      </Dialog>
    </>
  );
};
const SimpleDialog = ({ open, onClose }) => {
  const { admin, getAdmin, isChange } = useAdminStore();
  const { logoutAuth } = useAuthStore();
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getAdmin();
  }, [isChange]);
  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            position: "fixed",
            top: 50,
            right: 50,
            m: 0,
            height: "300px",
            width: "270px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <Stack spacing={1} borderRadius={3} padding="0px" paddingTop={"10px"}>
          <Stack direction="row" alignItems="center" spacing={2}>
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
              <Typography variant="h5">{admin?.email}</Typography>
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
              <Typography variant="h5">{admin?.mobile}</Typography>
            </Stack>
            <Stack direction="row" justifyContent={"center"}>
              <Typography
                variant="h5"
                sx={{ cursor: "pointer" }}
                onClick={() => setPasswordDialogOpen(true)}
              >
                Change Password
              </Typography>
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
            <Typography variant="h5" color="#F22E22">
              Logout
            </Typography>
          </Stack>
        </Stack>
      </Dialog>
      <ChangePasswordDialog
        open={passwordDialogOpen}
        onClose={() => setPasswordDialogOpen(false)}
      />
    </>
  );
};

const Layout = (props) => {
  const { admin } = useAdminStore();
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const theme = useTheme();
  const location = useLocation();
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
  const navItems = filterNavigation(
    subNavigation,
    admin?.role?.permissions || []
  );

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
        {navItems?.map((item) =>
          item.name === "Sub-admin" ? (
            <div key={item.name}>
              <ListItem sx={{ paddingBottom: "8px" }} disablePadding>
                <ListItemButton
                  onClick={handleClick}
                  sx={{
                    borderRadius: "10px",
                    color: "#919099",
                    marginLeft: "20px",
                    marginRight: "10px",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#002B9B",
                    },
                    "&:hover .MuiListItemIcon-root": { color: "#fff" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 24,
                      marginRight: 1,
                      color: location.pathname === item.to ? "#fff" : "#919099",
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
                          // borderRadius: "10px",
                          marginLeft: "40px",
                          marginRight: "40px",
                          color:
                            location.pathname === subItem.to
                              ? "#002B9B"
                              : "#4D515A",
                          backgroundColor:
                            location.pathname === subItem.to
                              ? "#FFF7F3"
                              : "transparent",
                          "&:hover": {
                            color: "#002B9B",
                            // backgroundColor: "#FFF7F3",
                            // border: "1px solid #002B9B ",
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.name}
                          primaryTypographyProps={{
                            variant: "h3",
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
              <ListItemButton
                component={Link}
                to={item.to}
                sx={{
                  borderRadius: "10px",
                  marginLeft: "20px",
                  marginRight: "10px",
                  color: location.pathname === item.to ? "#fff" : "#919099",
                  backgroundColor:
                    location.pathname === item.to ? "#002B9B" : "transparent",
                  "&:hover": { color: "#fff", backgroundColor: "#002B9B" },
                  "&:hover .MuiListItemIcon-root": { color: "#fff" },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 24,
                    marginRight: 1,
                    color: location.pathname === item.to ? "#fff" : "#919099",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ variant: "h3" }}
                />{" "}
              </ListItemButton>
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
                0 minutes ago
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
              justifyContent={"space-between"}
              onClick={handleDialogOpen}
              sx={{ cursor: "pointer", flexShrink: 0, marginLeft: "10px" }}
            >
              {" "}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={profile}
                  sx={{ width: 40, height: 40 }}
                />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant="h5" color={"#292D32"}>
                    {admin?.name}
                  </Typography>
                  <Typography variant="h6" color={"rgba(41, 45, 50, 0.44)"}>
                    {admin?.designation}
                  </Typography>
                </Box>
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
          minHeight: "100vh",
          p: 2,
          backgroundColor: "#F7F7F7",
          paddingTop: 6,
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
