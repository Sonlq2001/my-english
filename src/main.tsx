import React from "react";
import ReactDOM from "react-dom/client";

import ErrorBoundary from "@app/components/ErrorBoundary/ErrorBoundary.tsx";
import App from "./App.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
