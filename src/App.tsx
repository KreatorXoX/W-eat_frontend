import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalLayout from "./layouts/ModalLayout";
import RootLayout from "./layouts/RootLayout";
import CheckoutLayout from "./layouts/CheckoutLayout";
import Account from "./pages/Account";

import Error from "./pages/Error";

import Nutritions from "./pages/Nutritions";
import Cart from "./pages/Cart";
import CartLayout from "./layouts/CartLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/account",
        element: <ModalLayout />,
        children: [
          { index: true, element: <Account /> },
          { path: "/account/login", element: <Login /> },
          { path: "/account/register", element: <Register /> },
        ],
      },
      {
        path: "/product/:id",
        element: <ModalLayout />,
        children: [
          {
            index: true,
            element: <Product />,
          },
        ],
      },
      {
        path: "/nutritions",
        element: <ModalLayout />,
        children: [
          {
            index: true,
            element: <Nutritions />,
          },
        ],
      },
      {
        path: "/cart",
        element: <CartLayout />,
        children: [{ index: true, element: <Cart /> }],
      },
    ],
  },

  {
    path: "/checkout",
    element: <CheckoutLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "account",
        element: <ModalLayout />,
        children: [
          { index: true, element: <Account /> },
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
