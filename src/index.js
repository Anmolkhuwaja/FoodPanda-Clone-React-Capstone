import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Error from "./components/error/Error";
import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import City from "./components/city/City";
import Cities from "./components/home/Cities";
import Restaurant from "./components/restaurant/Restaurant";
import store from "./app/Store";
import { Provider } from "react-redux";

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
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "city/:id",
        element: <City />,
      },
      {
        path: "restaurant/:id/:name",
        element: <Restaurant />,
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
