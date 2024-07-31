import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SmoothScrolling from "./components/Home/Scrolling.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { CursorStateProvider } from "./components/cursor/CursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <Router>
      <CursorStateProvider>
        <App />
      </CursorStateProvider>
      </Router>
    </SmoothScrolling>
  </React.StrictMode>
);
