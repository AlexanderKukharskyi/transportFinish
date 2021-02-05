import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContext} from "storeon";

import {App} from "./App";
import {store} from "./store"

import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App/>
    </StoreContext.StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
