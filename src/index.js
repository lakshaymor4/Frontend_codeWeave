import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./app/Navbar";
import Home from "./app/Homepage";
import Edit from "./app/editor";
import Naav from "./app/navbar2";
import Si from "./app/signup";
import Log from "./app/login";
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
  {
    path:"/editor",
    element:<Edit />
  },
  {
    path:"/rand",
    element:<Naav />
  },{
    path:"/sign",
    element:<Si />
  },{
    path:"/login",
    element:<Log />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
