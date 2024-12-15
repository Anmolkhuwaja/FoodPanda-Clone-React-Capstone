import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import Error from "./components/error/Error";
import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*", // Catch-all route for undefined paths
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <RouterProvider router={router} />
  // </Provider>
);
