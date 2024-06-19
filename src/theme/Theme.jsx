import { createTheme } from "@mui/material/styles";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
`;

const theme = createTheme({
  palette: {}, // Your palette configuration
  typography: {
    fontFamily: "'Inter'", // Setting the default font family to Inter
    h1: {
      fontSize: "25px",
      fontWeight: 700,
      lineHeight: "30px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "30px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "14px",
      fontWeight: 500,
    },
    h6: {
      fontSize: "12px",
      fontWeight: 400,
    },
    h7: {
      fontSize: "10px",
      fontWeight: 400,
    },
    h8: {
      fontSize: "20px",
      fontWeight: 400,
    },
    h9: {
      fontSize: "13px",
      fontWeight: 500,
    },
    h10: {
      fontSize: "34px",
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": globalStyles,
      },
    },
  },
});

export default theme;
