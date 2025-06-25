import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import App from "./App/App";
import rootReducer, { initialState } from "./reducers/rootReducer";

// Use Redux DevTools if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Render the app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
