import React from "react";
import ReactDOM from "react-dom/client";
import "./src/index.css";
// Switch between maintenance and live app:
import App from "./src/App.jsx";           // maintenance (public)
// import App from "./src/App.live.jsx";   // full app (local dev)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
