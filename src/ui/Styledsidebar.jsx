import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from 'react'
import {
    AppBar,
    Box,
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
  
  const drawerWidth = 240;
  

const Styledsidebar = () => {
  return (
    <div> <Box sx={{ display: "flex" }}>
    <CssBaseline />

    <AppBar
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        background: `white  `,
        boxShadow: `none`,
      }}
    >
      <Toolbar> 
        <Typography variant="h6" noWrap component="div">
          Permanent drawer
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
      <Toolbar />
      
      <Divider />
      

      <List sx={{  paddingLeft:'5px'}}>
        {[
          "Approvals",
          "Events",
          "Sub-admin",
          "Finance",
          "Staffs",
          "Tier",
          "Policy",
        ].map((text, index) => (
          <ListItem sx={{paddingBottom:'8px'}} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{marginRight:'0', paddingLeft:'20px'}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{marginTop:'80px'}} />
    </Drawer>
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <h1>Home Page</h1>
    </Box>
  </Box>
  </div>
  )
}

export default Styledsidebar