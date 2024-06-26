import {
  Box,
  Divider,
  Paper,
  Typography,
  Stack,
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
import { CloseIcon } from "../assets/icons/CloseIcon";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentPaper, setCurrentPaper] = useState(1);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    console.log("Go back clicked");
    setCurrentPaper(1);
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
            <Stack spacing={2} sx={{ width: '100%', textAlign: 'left' }}>
              <Typography variant="h2" sx={{ marginBottom: "10px" }}>
                Sign In
              </Typography>
              <Typography variant="body1">
                Login to your account to continue the process
              </Typography>
              <StyledInput
                placeholder="Enter your email"
                startIcon={<EmailIcon />}
              />
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
              <StyledButton variant="primary" name="Sign in" />
              <Link
                style={{ color: "#2D9CDB", textDecoration: "none" }}
                onClick={() => setCurrentPaper(2)}
              >
                Forgot Your Password?
              </Link>
            </Stack>
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
            <Stack spacing={2} sx={{ width: '100%', textAlign: 'left' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h2" sx={{ marginBottom: "10px" }}>
                  Forgot Your Password?
                </Typography>
                <Box onClick={handleGoBack} sx={{ cursor: 'pointer' }}>
                  <CloseIcon />
                </Box>
              </Stack>
              <Typography variant="body1" sx={{ mb: 3 }}>
                We will send you a reset link
              </Typography>
              <StyledInput
                placeholder="Enter your email"
                startIcon={<EmailIcon />}
              />
              <StyledButton
                variant="primary"
                name="Send"
                onClick={() => setCurrentPaper(3)}
              />
            </Stack>
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
            <Stack spacing={2} sx={{ width: '100%', textAlign: 'left' }}>
              <Typography variant="h2" sx={{ marginBottom: "10px" }}>
                Changing Password
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Enter your new password
              </Typography>
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password again"
                startIcon={<LockIcon />}
                endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
              />
              <StyledButton
                variant="primary"
                name="Confirm"
                onClick={() => setCurrentPaper(4)}
              />
            </Stack>
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
            <Stack spacing={2} sx={{ width: '100%', textAlign: 'left' }}>
              <Typography variant="h2" sx={{ marginBottom: "10px" }}>
                Changing Password
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#05A660' }}>
                Password Reset Successful
              </Typography>
              <StyledButton
                variant="primary"
                name="Try logging in again"
                onClick={() => setCurrentPaper(1)}
              />
            </Stack>
          </Box>
        </Paper>
      )}
    </div>
  );
};

export default LoginPage;
