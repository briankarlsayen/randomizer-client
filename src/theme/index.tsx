// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D6D73", // your primary color
      // main: "#F0C029", // your primary color
    },
    secondary: {
      main: "#000", // your secondary color
      // main: "#f0c75e", // your secondary color
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Inter, sans-serif",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

theme.typography.h1 = {
  fontSize: "6rem",
  fontWeight: "300",
  [theme.breakpoints.down("lg")]: {
    fontSize: "4.5rem",
    fontWeight: "300",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    fontWeight: "400",
  },
};

theme.typography.h2 = {
  fontSize: "3.75rem",
  fontWeight: "300",
  [theme.breakpoints.down("lg")]: {
    fontSize: "3rem",
    fontWeight: "300",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    fontWeight: "500",
  },
};

theme.typography.h3 = {
  fontSize: "3rem",
  fontWeight: "300",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.25rem",
    fontWeight: "300",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
    fontWeight: "500",
  },
};

theme.typography.h4 = {
  fontSize: "2.125rem",
  fontWeight: "400",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
    fontWeight: "400",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    fontWeight: "500",
  },
};

theme.typography.h5 = {
  fontSize: "1.5rem",
  fontWeight: "400",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.4rem",
    fontWeight: "400",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
    fontWeight: "500",
  },
};

theme.typography.h6 = {
  fontSize: "1.25rem",
  fontWeight: "500",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
    fontWeight: "500",
  },
};

theme.typography.subtitle1 = {
  fontSize: "1rem",
  fontWeight: "400",
  [theme.breakpoints.down("md")]: {
    fontSize: ".875rem",
  },
};

theme.typography.subtitle2 = {
  fontSize: ".875rem",
  fontWeight: "400",
  [theme.breakpoints.down("md")]: {
    fontSize: ".8rem",
  },
};

theme.typography.body1 = {
  fontSize: "1rem",
  fontWeight: "400",
  [theme.breakpoints.down("md")]: {
    fontSize: ".875rem",
  },
};

theme.typography.body2 = {
  fontSize: ".875rem",
  fontWeight: "400",
  [theme.breakpoints.down("md")]: {
    fontSize: ".8rem",
  },
};

export default theme;
