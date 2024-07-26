import React, { useEffect, useState } from "react";
import { Box, Divider, Paper, Typography, Stack } from "@mui/material";
import { XpenseaIcon } from "../assets/icons/XpenseaIcon";
import Loginbackground from "../assets/images/loginbackground.png";
import StyledInput from "../ui/StyledInput";
import StyledButton from "../ui/StyledButton";
import { EmailIcon } from "../assets/icons/EmailIcon";
import { LockIcon } from "../assets/icons/LockIcon";
import { PasswordIcon } from "../assets/icons/PasswordIcon";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { getLogin } from "../api/adminapi";
import ForgotPassword from "../components/login/ForgotPassword";
import ChangePassword from "../components/login/ChangePassword";
import PasswordSuccess from "../components/login/PasswordSuccess";

const LoginPage = () => {
  const [currentPaper, setCurrentPaper] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await getLogin(data);
      // console.log(user.data);
      localStorage.setItem("token", user.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("error", error);
    }
  };
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
    navigate("/dashboard");
  }
  }, [isAuth]);
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
            <Stack spacing={2} sx={{ width: "100%", textAlign: "left" }}>
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
                style={{
                  color: "#2D9CDB",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentPaper(2)}
              >
                Forgot Your Password?
              </Link>
            </Stack>
          </Box>
        </Paper>
      )}

      {currentPaper === 2 && (
        <ForgotPassword setCurrentPaper={setCurrentPaper} />
      )}

      {currentPaper === 3 && (
        <ChangePassword setCurrentPaper={setCurrentPaper} />
      )}

      {currentPaper === 4 && (
        <PasswordSuccess setCurrentPaper={setCurrentPaper} />
      )}
    </div>
  );
};

export default LoginPage;
