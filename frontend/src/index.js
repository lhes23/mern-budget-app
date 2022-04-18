import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Global Styling
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// React Router Dom
import { BrowserRouter } from "react-router-dom";

// React Redux
import { Provider } from "react-redux";
import store from "./features/store";

// Axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
