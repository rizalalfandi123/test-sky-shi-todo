import type {} from "@mui/lab/themeAugmentation";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightRegular: 500,

    allVariants: {
      color: "#111111",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },

  shape: {
    borderRadius: 12,
  },

  palette: {
    primary: {
      main: "#16ABF8",
    },

    error: {
      main: "#ED4C5C",
    },

    background: {
      default: "#f4f4f4",
    },

    success: {
      main: "#00A790"
    }
  },

  components: {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",

          ":hover": {
            boxShadow: "none",
          },
        },
      },
      variants: [{ props: { variant: "contained" }, style: { color: "white" } }],
    },
  },
});
