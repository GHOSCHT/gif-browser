import React, { Fragment } from "react";
import { render } from "react-dom";
import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import rootReducer from "./reducers";

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
