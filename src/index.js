import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AirlinesProvider from "./context/AirlinesContext";

ReactDOM.render(
  <React.StrictMode>
    <AirlinesProvider>
      <App />
    </AirlinesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
