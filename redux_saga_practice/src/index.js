import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer  from './Store/reducer';
import {createStore, applyMiddleware,compose} from "redux"
import {Provider} from "react-redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from './Store/sagas/rootSaga';

const saga = createSagaMiddleware();
const middleware = [saga]
const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);
saga.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
