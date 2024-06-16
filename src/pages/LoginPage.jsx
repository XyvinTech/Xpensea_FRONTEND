import {
  Alert,
  Box,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { XpenseaIcon } from "../assets/icons/XpenseaIcon";
import Loginbackground  from "../assets/images/loginbackground.png";
import StyledInput  from "../ui/StyledInput";
import StyledButton from "../ui/StyledButton";

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
      padding: '16px', 
    }}
  >
    <Paper
      sx={{
        width: { xs: '100%', sm: '80%', md: '560px' }, 
        height: { xs: 'auto', md: '631.43px' }, 
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
        <Divider sx={{ width: "100%", marginBottom: "3em" }} />
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start", 
            width: "85%",
            marginTop:'10px',
            marginBottom:'3em'
          }}
        >
          <Box sx={{marginBottom:'1em', textAlign:'left'}}> 

          <Typography variant="h2" sx={{ mb: 1, marginBottom:'10px' }}>Sign In</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>Login to your account to continue the process</Typography>
</Box>


<Box sx={{marginBottom:'2em',width:'100%'}}> 
<StyledInput placeholder={"Enter your email"} />

</Box>
<Box  sx={{marginBottom:'10px',width:'100%'}}>
<StyledInput placeholder={"Enter your password"} />



</Box>


<Box sx={{marginBottom:'5em',width:'100%'}}>

</Box>


<Box sx={{marginBottom:'3em',width:'100%'}}>

<StyledButton variant="primary" name="Sign in" />
</Box>




<Box sx={{marginBottom:'1em', textAlign:'left'}}> 
<a href="" style={{ color: '#2D9CDB' ,textDecoration:'none'}} > Forgot Your Password ?</a>

</Box>


     


        </Box>
      </Paper>
    </div>
  );
};



export default LoginPage;
