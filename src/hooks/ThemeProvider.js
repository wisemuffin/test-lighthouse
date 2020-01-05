import React, { useContext } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { red, green, white, grey } from "@material-ui/core/colors";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import white from "@material-ui/core/colors/blueGrey";
import grey from "@material-ui/core/colors/grey";

import ThemeContext from "../storeContext/themeContext";

const theme = {
  palette: {
    warning: red,
    primary: {
      light: red[300],
      main: red[500],
      dark: red[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    white: white,
    grey: grey
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 16
  }
};

const ThemeProvider = props => {
  const { themeContext } = useContext(ThemeContext);

  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        ...theme,
        palette: {
          ...theme.palette,
          type: themeContext.dark ? "dark" : "light"
        }
      })}
    >
      {props.children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
