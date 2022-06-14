import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes/";
import { BrowserRouter } from "react-router-dom";
import { store } from "@/store/index";
import { Provider } from "react-redux";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
