import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/contact";
import App from "./App";
import Home from "./pages/home/home";
import ErrorNotFound from "./pages/error/errorNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
