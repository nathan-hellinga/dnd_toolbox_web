import { createTheme } from "@mui/material/styles";

const opacity = (color, percent) => {
  const x = Math.floor(percent * 255);
  return `${color}${x.toString(16)}`;
};

const palette = {
  mode: "dark",
  primary: {
    light: "#fcdea4",
    main: "#f4ba7d",
    dark: "#de925e",
  },
  secondary: {
    lighter: "#47CAE8",
    light: "#45b1cf",
    main: "#3489a8",
    dark: "#276781",
  },
  background: {
    lighter: "#505050",
    light: "#303030",
    main: "#242424",
    dark: "#1f1f1f",
  },
  grey: {
    light: "#999999",
    main: "#888888",
    dark: "#777777",
  },
  red: {
    main: "#ff0000",
  },
  highlight: {
    main: "#f0f0f0",
    dark: "#cccccc",
  },
  info: {
    main: "#069DEF",
  },
};

const shape = {
  borderRadius: 16,
};

const theme = createTheme({
  palette,
  shape,
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            margin: "0px 0", // Removes the default gutters/margins for expanded Accordion items
          },
          "&.Mui-expanded:before": {
            opacity: 1,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: shape.borderRadius,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.light,
          color: palette.primary.dark,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "& strong": {
            color: palette.primary.dark,
          },
          "& a": {
            color: palette.primary.main,
            fontWeight: "bold",
            "&:hover": {
              color: palette.primary.dark,
            },
          },
          "& code": {
            backgroundColor: "rgba(40, 44, 52, 0.9)",
            borderRadius: 3,
            fontFamily: "Courier, monospace",
            fontSize: "0.9em",
            padding: "0.2em 0.4em",
            color: "#5CD6BE",
          },
        },
      },
    },
  },
});

export default theme;
