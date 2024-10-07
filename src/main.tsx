import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GlobalStyle from "./GlobalStyle";
import Layout from "./Layout";
import Planet from "./Planet";
import Header from "./Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:planetName",
        element: <Planet />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />

    <RouterProvider router={router} />
  </StrictMode>
);
