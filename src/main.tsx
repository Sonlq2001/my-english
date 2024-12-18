import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "regenerator-runtime/runtime";
import "suneditor/dist/css/suneditor.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ErrorBoundary from "@app/components/ErrorBoundary/ErrorBoundary.tsx";
import { store, persistor } from "@app/redux/store.ts";
import PlayerProvider from "@app/components/PlayerProvider/PlayerProvider.tsx";

import { Theme } from "./styles/theme/theme.ts";
import App from "./App.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <PlayerProvider>
            <App />
          </PlayerProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
  // </React.StrictMode>
);
