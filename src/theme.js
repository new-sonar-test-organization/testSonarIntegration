import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#d7d5d5",
    },
    success: {
      main: "#00c853",
    },
    textFieldBackground: "#f8fafb",
    approveExceptionColor: "#ecf9f3",
    mopCancelled: "#56657f",
    holidayMoratorium: "#eebc99",
    mopDenied: "#f29c9a",
    exceptionRequestColor: "rgba(215,213,213,0.5)",
    workReadyColor: "#ecf9f3",
    pendingApprovalColor: "#fff5e5",

    neutral: {
      main: "rgba(0, 0, 0, 0.6)",
    },
    golden: {
      main: "#ffa000",
    },
    white: {
      main: "#ffffff",
    },
    grey: {
      main: "#e5e5e5",
      light: "#fafafa",
      dark: "gray",
      lightShadow: "rgba(0, 0, 0, 0.12)",
      darkShadow: "rgba(0, 0, 0, 0.24)",
    },
    loginBackground: {
      main: "#fafafa",
      light: "#FBFCFD",
    },
    roleCountShadow: "#ebebeb",
    blackInactive: "rgba(0, 0, 0, 0.54)",
    textColor: "rgba(0, 0, 0, 0.87)",
    mopActionModalHeader: {
      main: "#252631",
    },
    modalBoxShadow: {
      main: "rgba(153, 155, 168, 0.12)",
    },
    pageFooter: {
      main: "#8997b1",
    },
    memberShipTableHeadings: {
      main: "#9e9e9e",
    },
    hoverBackground: {
      main: "#f5f5f5",
    },
    blue: {
      main: "#1e88e5",
      light: "#64b5f6",
    },
    snackBar: {
      blue: "#1976d2",
      yellow: "#ff8000",
      red: "#c62828",
    },
  },
  spacing: 4,
  typography: {
    fontFamily: ["Roboto", "sans-serif", "Arial"].join(","),
    fontWeightBold: 800,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: "normal",
    h1: {
      fontSize: "96px",
      fontWeight: 300,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "-1.5px",
    },
    h2: {
      fontSize: "60px",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "-0.5px",
    },
    h3: {
      fontSize: "48px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h4: {
      fontSize: "34px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.25px",
    },
    h5: {
      fontSize: "240px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h6: {
      fontSize: "20px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.15px",
    },
    h7: {
      fontSize: "18px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.44,
      letterSpacing: "0.15px",
    },
    h8: {
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.44,
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.5",
      letterSpacing: "normal",
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.5",
      letterSpacing: "normal",
    },
    subtitle3: {
      fontSize: "14px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
    },
    subtitle4: {
      fontSize: "14px",
      color: "rgba(0, 0, 0, 0.54)",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
    },
    caption1: {
      fontSize: "12px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.25,
      letterSpacing: "0.4px",
    },
    caption2: {
      fontSize: "9px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.11,
      letterSpacing: "0.3px",
    },
    caption3: {
      fontSize: "11px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.36",
      letterSpacing: "0.4px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.5px",
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.5px",
    },
    body3: {
      fontSize: "20px",
      fontWeight: 300,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.15px",
    },
    body4: {
      fontSize: "24px",
      fontWeight: 300,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    body5: {
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.25",
    },

    button: {
      textTransform: "capitalize",
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: "Roboto",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "1.25px",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#f8fafb",
          "&:hover": {
            backgroundColor: "#f8fafb",
          },
        },
      },
    },
  },
});

export default theme;
