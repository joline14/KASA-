import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

//initialise et démarre une application React en rendant le composant App dans l'élément root du DOM

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
