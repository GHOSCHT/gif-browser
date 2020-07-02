import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/NavBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import rootReducer from "./reducers";
import { useSelector, useDispatch } from "react-redux";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#23272A",
    },
    secondary: {
      main: "#7289DA",
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#30C078",
    },
    secondary: {
      main: "#7289DA",
    },
  },
});

function App() {
  const isDarkMode = useSelector((state) => state.darkModeReducer);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavBar />
      <SearchBar />
      <CssBaseline />
      <ImageList />
    </ThemeProvider>
  );
}

export default App;
