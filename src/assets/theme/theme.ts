import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const PRIMARY = {
  lighter: "#6BC785",
  light: "#C2EFD4",
  main: "#267D49",
  dark: "#224F34",
  darker: "#224F34",
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#A3F3BE",
  light: "#454545",
  dark: "#373737",
  contrastText: "#FFFFFF",
};

const ELEMENTRY = {
  lighter: "#CADCD0",
  light: "#A9D4BA",
  dark: "#93B9A2",
  contrastText: "#FFFFFF",
};

export const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  elementry: ELEMENTRY,
};
