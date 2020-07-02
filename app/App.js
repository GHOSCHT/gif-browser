import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/NavBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import rootReducer from "./reducers";
import { useSelector, useDispatch } from "react-redux";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#23272A",
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7289DA",
    },
  },
});

function App() {
  const isDarkMode = useSelector((state) => state.darkModeReducer);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavBar />
      <Home />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
