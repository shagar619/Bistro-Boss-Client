import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes/Routes";
import './index.css';
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  <AuthProvider>

    <QueryClientProvider client={queryClient}>

      <HelmetProvider>
        <div className="cinzel-font max-w-screen-2xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>

    </QueryClientProvider>

  </AuthProvider>

  </React.StrictMode>
);
