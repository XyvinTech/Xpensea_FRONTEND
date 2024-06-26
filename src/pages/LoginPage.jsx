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
import { Controller, useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentPaper, setCurrentPaper] = useState(1);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    setCurrentPaper(1);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = data => {
    console.log(data);
    // Handle different submissions based on currentPaper state
    // if (currentPaper === 1) {
    //   // Handle sign-in
    // } else if (currentPaper === 2) {
    //   // Handle forgot password
    // } else if (currentPaper === 3) {
    //   // Handle change password
    //   setCurrentPaper(4);
    // }
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
            onSubmit={handleSubmit(onSubmit)}
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
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    placeholder="Enter your email"
                    startIcon={<EmailIcon />}
                  />
                )}
                rules={{ required: "Email is required" }}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    startIcon={<LockIcon />}
                    endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
                  />
                )}
                rules={{ required: "Password is required" }}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <StyledButton type="submit" variant="primary" name="Sign in" />
              <Link
                style={{ color: "#2D9CDB", textDecoration: "none", cursor: "pointer" }}
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
            onSubmit={handleSubmit(onSubmit)}
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
              <Controller
                name="forgotEmail"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    placeholder="Enter your email"
                    startIcon={<EmailIcon />}
                  />
                )}
                rules={{ required: "Email is required" }}
              />
              {errors.forgotEmail && (
                <span className="text-red-500">{errors.forgotEmail.message}</span>
              )}
              <StyledButton type="submit" variant="primary" name="Send" />
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
            onSubmit={handleSubmit(onSubmit)}
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
              <Controller
                name="newPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    startIcon={<LockIcon />}
                    endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
                  />
                )}
                rules={{ required: "New password is required" }}
              />
              {errors.newPassword && (
                <span className="text-red-500">{errors.newPassword.message}</span>
              )}
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password again"
                    startIcon={<LockIcon />}
                    endIcon={<PasswordIcon onClick={handleClickShowPassword} />}
                  />
                )}
                rules={{ required: "Confirm password is required" }}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">{errors.confirmPassword.message}</span>
              )}
              <StyledButton type="submit" variant="primary" name="Confirm" />
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
