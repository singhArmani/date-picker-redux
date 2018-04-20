import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Hello from "./headerFilter";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  form: formReducer
});

let store = createStore(reducers, composeWithDevTools({})());

const App = () => (
  <div>
    <Hello name="CodeSandbox" />
    <h2>React Date Picker in Redux {"\u2728"}</h2>
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
