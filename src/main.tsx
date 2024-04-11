import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "regenerator-runtime/runtime";
import "suneditor/dist/css/suneditor.min.css";
import { Provider } from "react-redux";

import ErrorBoundary from "@app/components/ErrorBoundary/ErrorBoundary.tsx";
import App from "./App.tsx";
import "./styles/index.css";
import { Theme } from "./styles/theme/theme.ts";
import { store } from "@app/redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
