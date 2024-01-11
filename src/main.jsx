import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App.jsx";
import "./index.css";

const queryQlient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryQlient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
