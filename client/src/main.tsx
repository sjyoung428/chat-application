import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProtectRouter from "./components/ProtectRouter";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProtectRouter>
        <NextUIProvider>
          <Layout>
            <GlobalStyle />
            <App />
          </Layout>
        </NextUIProvider>
      </ProtectRouter>
    </BrowserRouter>
  </React.StrictMode>
);
