// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";

// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers/reducer";
import mySaga from "./sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// Then run the saga
sagaMiddleware.run(mySaga);
export default store;
