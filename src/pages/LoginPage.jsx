import {
  Box,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { XpenseaIcon } from "../assets/icons/XpenseaIcon";
import Loginbackground from "../assets/images/loginbackground.png";
import StyledTextField from "../ui/StyledTextField";

const LoginPage = () => {
  return (
    <div
      className="Login"
      style={{
        backgroundImage: `url(${Loginbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "560px",
          height: "631.43px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30px",
          borderRadius: "8.75px",
          margin: "auto",
        
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <XpenseaIcon />
          <Typography variant="h1" sx={{ ml: 1 }}>
            Xpensea
          </Typography>
        </Box>
        <Divider sx={{ width: "100%", marginBottom: "20px" }} />
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Changed from 'left' to 'flex-start'
            justifyContent: "flex-start", // Changed from 'left' to 'flex-start'
            width: "85%",
            marginTop:'10px'
          }}
        >
          <Typography variant="h2" sx={{ mb: 1, marginBottom:'10px' }}>Sign In</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>Login to your account to continue the process</Typography>

<Box >
<StyledTextField />
     <StyledTextField/>


</Box>


     


        </Box>
      </Paper>
    </div>
  );
};



export default LoginPage;
