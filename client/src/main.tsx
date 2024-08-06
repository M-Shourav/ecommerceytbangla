import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./ui/Header.tsx";
import Cancel from "./pages/Cancel.tsx";
import Cart from "./pages/Cart.tsx";
import Catagories from "./pages/Catagories.tsx";
import Favorite from "./pages/Favorite.tsx";
import NotFound from "./pages/NotFound.tsx";
import Orders from "./pages/Orders.tsx";
import Product from "./pages/Product.tsx";
import Profile from "./pages/Profile.tsx";
import Success from "./pages/Success.tsx";

const LayoutRouter = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRouter />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/catagories",
        element: <Catagories />,
      },
      {
        path: "/catagories/:id",
        element: <Catagories />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
