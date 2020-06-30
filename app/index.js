import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
import Home from "./components/Home";

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <AppContainer>
    <Provider store={store}>
      <Home />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
