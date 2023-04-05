import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import OrderReview from "./components/order-review/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import cartProductsLoader from "./loders/CartProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "order",
        element: <Order />,
        loader: cartProductsLoader,
      },
      {
        path: "order-review",
        element: <OrderReview />,
      },
      {
        path: "manage-inventory",
        element: <Inventory />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
