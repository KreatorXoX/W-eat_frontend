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
import EditProduct from "./pages/EditProduct";
import PersonalPage from "./pages/PersonalPage";
import Orders from "./pages/Orders";

import Favourites from "./pages/Favourites";
import Addresses from "./pages/Addresses";
import ChangePassword from "./pages/ChangePassword";
import UpsertAddress from "./pages/UpsertAddress";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./admin/pages/Home/AdminDashboard";
import AdminCustomers from "./admin/pages/Customers/Customers";
import OrdersLayout from "./layouts/OrdersLayout";
import ActiveOrders from "./admin/pages/Orders/ActiveOrders";
import OrderHistory from "./admin/pages/Orders/OrderHistory";
import ProtectedRoute from "./utils/routes/ProtectedRoute";
import AdminRoute from "./utils/routes/AdminRoute";

import OrderDetails from "./components/Order/OrderDetails";
import MenuLayout from "./layouts/MenuLayout";
import MenuCategory from "./admin/pages/Menu/Category/MenuCategory";
import MenuProduct from "./admin/pages/Menu/Product/MenuProduct";
import MenuExtra from "./admin/pages/Menu/Extra/MenuExtra";
import MenuExtraProduct from "./admin/pages/Menu/ExtraProduct/MenuExtraProduct";
import NewCategory from "./admin/pages/Menu/Category/NewCategory";
import NewProduct from "./admin/pages/Menu/Product/NewProduct";
import NewExtra from "./admin/pages/Menu/Extra/NewExtra";
import NewExtraProduct from "./admin/pages/Menu/ExtraProduct/NewExtraProduct";
import EditAdminProduct from "./admin/pages/Menu/Product/EditProduct";
import EditCategory from "./admin/pages/Menu/Category/EditCategory";
import EditExtra from "./admin/pages/Menu/Extra/EditExtra";
import EditExtraProduct from "./admin/pages/Menu/ExtraProduct/EditExtraProduct";
import Restaurant from "./admin/pages/Settings/Restaurant";
import EditRestaurant from "./admin/components/Restaurant/EditRestaurant";
import NewRestaurant from "./admin/components/Restaurant/NewRestaurant";
import AfterPayment from "./pages/AfterPayment";
import AfterOrder from "./pages/AfterOrder";
import PersistLogin from "./components/PersistLogin";
import VerifyAccount from "./pages/VerifyAccount";
import ForgotPassword from "./components/Forms/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Oauth from "./pages/Oauth";
import NewOrders from "./admin/pages/Orders/NewOrders";
import ClientOrdersLayout from "./layouts/ClientOrdersLayout";
import ClientOrderHistory from "./pages/ClientOrderHistory";
import ContactUs from "./pages/ContactUs";
import Reviews from "./pages/Reviews";

const router = createBrowserRouter([
  {
    element: <PersistLogin />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RootLayout />,

        children: [
          {
            path: "/account",
            element: <ModalLayout />,
            children: [
              { index: true, element: <Account /> },
              { path: "login", element: <Login /> },
              { path: "register", element: <Register /> },

              {
                element: <ProtectedRoute />,
                // implement a sign-in to access your account informations error page!
                children: [
                  { path: "personal-info", element: <PersonalPage /> },
                  {
                    path: "orders",
                    element: <ClientOrdersLayout />,
                    children: [
                      { index: true, element: <Orders /> },
                      {
                        path: "order-history",
                        element: <ClientOrderHistory />,
                      },
                    ],
                  },

                  {
                    path: "order-details/:id",
                    element: <OrderDetails />,
                  },
                  { path: "favourites", element: <Favourites /> },
                  { path: "addresses", element: <Addresses /> },
                  { path: "edit-address", element: <UpsertAddress /> },
                  { path: "change-password", element: <ChangePassword /> },
                ],
              },
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
            path: "/edit-product/:id",
            element: <ModalLayout />,
            children: [
              {
                index: true,
                element: <EditProduct />,
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
            path: "/reviews",
            element: <ModalLayout />,
            children: [{ index: true, element: <Reviews /> }],
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

        children: [
          {
            path: "account",
            element: <ModalLayout />,
            children: [
              { index: true, element: <Account /> },
              { path: "login", element: <Login /> },
              { path: "register", element: <Register /> },
              {
                element: <ProtectedRoute />,
                // implement a sign-in to access your account informations error page!
                children: [
                  { path: "personal-info", element: <PersonalPage /> },
                  {
                    path: "orders",
                    element: <ClientOrdersLayout />,
                    children: [
                      { index: true, element: <Orders /> },
                      {
                        path: "order-history",
                        element: <ClientOrderHistory />,
                      },
                    ],
                  },
                  {
                    path: "order-details/:id",
                    element: <OrderDetails />,
                  },
                  { path: "favourites", element: <Favourites /> },
                  { path: "addresses", element: <Addresses /> },
                  { path: "edit-address", element: <UpsertAddress /> },
                  { path: "change-password", element: <ChangePassword /> },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/payment",
        element: <AfterPayment />,
      },
      {
        path: "/order",
        element: <AfterOrder />,
      },
      {
        path: "/verify-account",
        element: <VerifyAccount />,
      },
      {
        path: "/reset-password/:id/:resetCode",
        element: <ResetPassword />,
      },
      {
        path: "/oauth",
        element: <Oauth />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      {
        element: <AdminRoute />,
        // implement a sign-in as admin to access! error page!
        children: [
          {
            path: "/admin",
            element: <AdminLayout />,

            children: [
              { index: true, element: <AdminDashboard /> },
              {
                path: "orders",
                element: <OrdersLayout />,
                children: [
                  { index: true, element: <NewOrders /> },
                  { path: "active-orders", element: <ActiveOrders /> },
                  { path: "order-history", element: <OrderHistory /> },
                  {
                    path: ":id",
                    element: <ModalLayout />,
                    children: [
                      {
                        index: true,
                        element: <OrderDetails />,
                      },
                    ],
                  },
                ],
              },
              { path: "customers", element: <AdminCustomers /> },
              { path: "restaurant-settings", element: <Restaurant /> },
              { path: "restaurant-settings/edit", element: <EditRestaurant /> },
              { path: "restaurant-settings/new", element: <NewRestaurant /> },
              {
                path: "menu",
                element: <MenuLayout />,
                children: [
                  {
                    path: "categories",
                    element: <MenuCategory />,
                  },
                  {
                    path: "categories/new",
                    element: <NewCategory />,
                  },
                  {
                    path: "categories/edit/:id",
                    element: <EditCategory />,
                  },

                  {
                    path: "products",
                    element: <MenuProduct />,
                  },
                  {
                    path: "products/new",
                    element: <NewProduct />,
                  },
                  {
                    path: "products/edit/:id",
                    element: <EditAdminProduct />,
                  },
                  {
                    path: "extra",
                    element: <MenuExtra />,
                  },
                  {
                    path: "extra/new",
                    element: <NewExtra />,
                  },
                  {
                    path: "extra/edit/:id",
                    element: <EditExtra />,
                  },
                  {
                    path: "extra-product",
                    element: <MenuExtraProduct />,
                  },
                  {
                    path: "extra-product/new",
                    element: <NewExtraProduct />,
                  },
                  {
                    path: "extra-product/edit/:id",
                    element: <EditExtraProduct />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
