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
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

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
        element: <ProtectedRoute>
                    <Profile />
                 </ProtectedRoute>,
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
