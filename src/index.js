import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {ProductProvider , UserProvider} from './index/index'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
