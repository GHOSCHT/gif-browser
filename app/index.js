import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/NavBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#212121",
    },
  },
});

render(
  <AppContainer>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />
        <Home />
      </ThemeProvider>
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
