import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import ErrorBoundary from "@app/components/ErrorBoundary/ErrorBoundary.tsx";
import App from "./App.tsx";
import "./styles/index.css";
import { Theme } from "./styles/theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
