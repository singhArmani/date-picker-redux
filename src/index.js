import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Alert from "react-s-alert";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import HeaderFilter from "./component/headerFilter";
import FileUploader from "./component/fileUploader";
import RadioBtnGroupForm from "./component/radioBtnGroupForm";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  form: formReducer
});

let store = createStore(reducers, composeWithDevTools({})());

// isLoading would an ajax call request
const App = () => (
  <div>
    <h2>React Date Picker in Redux {"\u2728"}</h2>
    <HeaderFilter isLoading={false} />
    <hr />
    <h2>File Upload in Redux </h2>
    <FileUploader />
    <hr />
    <h2> Radio group button in Redux </h2>
    <RadioBtnGroupForm />
    <Alert stack={{ limit: 3 }} />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
