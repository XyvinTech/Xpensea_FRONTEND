import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {},
  typography: {
    h1: {
      fontSize: "25px",
      fontWeight: "700",
      lineHeight: "30px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "30px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: "500",
    },
  },
});

export default theme;
