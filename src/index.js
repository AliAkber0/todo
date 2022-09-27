import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { initialstate } from "./modals/reducers/reducer";
import rootSaga from "./modals/saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
