import {
  Box,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { XpenseaIcon } from "../assets/icons/XpenseaIcon";
import Loginbackground from "../assets/images/loginbackground.png";
import StyledInput from "../ui/StyledInput";
import StyledButton from "../ui/StyledButton";
import { EmailIcon } from "../assets/icons/EmailIcon";
import { LockIcon } from "../assets/icons/LockIcon";
import { PasswordIcon } from "../assets/icons/PasswordIcon";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentPaper, setCurrentPaper] = useState(1);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        padding: "16px",
      }}
    >
      {currentPaper === 1 && (
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "560px" },
            height: { xs: "auto", md: "631.43px" },
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
              marginTop: "10px",
              marginBottom: "3em",
            }}
          >
            <Box sx={{ marginBottom: "1em", textAlign: "left" }}>
              <Typography variant="h2" sx={{ mb: 1, marginBottom: "10px" }}>
                Sign In
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Login to your account to continue the process
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "2em", width: "100%" }}>
              <StyledInput
                placeholder={"Enter your email"}
                startIcon={<EmailIcon />}
              />
            </Box>
            <Box sx={{ marginBottom: "10px", width: "100%" }}>
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder={"Enter your password"}
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
            </Box>

            <Box sx={{ marginBottom: "5em", width: "100%" }}></Box>

            <Box sx={{ marginBottom: "3em", width: "100%" }}>
              <StyledButton variant="primary" name="Sign in" />
            </Box>

            <Box sx={{ marginBottom: "1em", textAlign: "left" }}>
              <Link
                style={{ color: "#2D9CDB", textDecoration: "none" }}
                onClick={() => setCurrentPaper(2)}
              >
                {" "}
                Forgot Your Password ?
              </Link>
            </Box>
          </Box>
        </Paper>
      )}

      {currentPaper === 2 && (
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "544px" },
            height: { xs: "auto", md: "325px" },
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
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "85%",
              marginTop: "10px",
              marginBottom: "3em",
            }}
          >
            <Box sx={{ marginBottom: "15px", textAlign: "left" }}>
              <Typography variant="h2" sx={{ mb: 1, marginBottom: "10px" }}>
                Forgot Your Password?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                We will send you a reset link
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "3em", width: "100%" }}>
              <StyledInput
                placeholder={"Enter your email"}
                startIcon={<EmailIcon />}
              />
            </Box>

            <Box sx={{ marginBottom: "3em", width: "100%" }}>
              <StyledButton
                variant="primary"
                name="Send"
                onClick={() => setCurrentPaper(3)}
              />
            </Box>
          </Box>
        </Paper>
      )}

      {currentPaper === 3 && (
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "544px" },
            height: { xs: "auto", md: "415px" },
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
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "85%",
              marginTop: "10px",
              marginBottom: "3em",
            }}
          >
            <Box sx={{ marginBottom: "15px", textAlign: "left" }}>
              <Typography variant="h2" sx={{ mb: 1, marginBottom: "10px" }}>
                Changing Password
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Enter your new password
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "3.5em", width: "100%" }}>
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder={"Enter your password"}
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
            </Box>
            <Box sx={{ marginBottom: "2em", width: "100%" }}>
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder={"Enter your password again"}
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
            </Box>

            <Box sx={{ marginBottom: "1em", width: "100%" }}>
              <StyledButton
                variant="primary"
                name="Confirm"
                onClick={() => setCurrentPaper(4)}
              />
            </Box>
          </Box>
        </Paper>
      )}

      {currentPaper === 4 && (
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "544px" },
            height: { xs: "auto", md: "223px" },
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
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "85%",
              marginTop: "10px",
              marginBottom: "3em",
            }}
          >
            <Box sx={{ marginBottom: "30px", textAlign: "left" }}>
              <Typography variant="h2" sx={{ mb: 1, marginBottom: "10px" }}>
                Changing Password
              </Typography>
              <Typography variant="body1" sx={{ mb: 3,color:'#05A660' }}>
              Password Reset Successful              </Typography>
            </Box>

            <Box sx={{ marginBottom: "2em", width: "100%" }}>
              <StyledButton
                variant="primary"
                name="Try logging in again"
                onClick={() => setCurrentPaper(1)}
              />
            </Box>
          </Box>
        </Paper>
      )}
    </div>
  );
};

export default LoginPage;
