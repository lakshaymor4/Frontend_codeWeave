import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./app/Navbar";
import Home from "./app/Homepage";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
