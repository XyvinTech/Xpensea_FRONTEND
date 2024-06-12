import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import theme from "./theme/Theme";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} /></ThemeProvider>
  </React.StrictMode>
);
