import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ModalLayout from './layouts/ModalLayout'
import RootLayout from './layouts/RootLayout'
import CheckoutLayout from './layouts/CheckoutLayout'
import Account from './pages/Account'

import Error from './pages/Error'

import Nutritions from './pages/Nutritions'
import Cart from './pages/Cart'
import CartLayout from './layouts/CartLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import EditProduct from './pages/EditProduct'
import PersonalPage from './pages/PersonalPage'
import Orders from './pages/Orders'

import Favourites from './pages/Favourites'
import Addresses from './pages/Addresses'
import ChangePassword from './pages/ChangePassword'
import EditAddress from './pages/EditAddress'
import ProductLayout from './layouts/ProductLayout'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './admin/pages/Home/AdminDashboard'
import AdminCustomers from './admin/pages/AdminCustomers'
import AdminMenu from './admin/pages/AdminMenu'
import OrdersLayout from './layouts/OrdersLayout'
import ActiveOrders from './admin/pages/Orders/ActiveOrders'
import OrderHistory from './admin/pages/Orders/OrderHistory'
import ProtectedRoute from './shared/utils/ProtectedRoute'
import AdminRoute from './shared/utils/AdminRoute'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/account',
        element: <ModalLayout />,
        children: [
          { index: true, element: <Account /> },
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { path: 'personal-info', element: <PersonalPage /> },
          { path: 'orders', element: <Orders /> },
          { path: 'favourites', element: <Favourites /> },
          {
            element: <ProtectedRoute />,
            children: [
              { path: 'addresses', element: <Addresses /> },
              { path: 'edit-address', element: <EditAddress /> },
              { path: 'change-password', element: <ChangePassword /> }
            ]
          }
        ]
      },
      {
        path: '/product/:id',
        element: <ProductLayout />,
        children: [
          {
            index: true,
            element: <Product />
          }
        ]
      },
      {
        path: '/edit-product/:id',
        element: <ProductLayout />,
        children: [
          {
            index: true,
            element: <EditProduct />
          }
        ]
      },
      {
        path: '/nutritions',
        element: <ProductLayout />,
        children: [
          {
            index: true,
            element: <Nutritions />
          }
        ]
      },
      {
        path: '/cart',
        element: <CartLayout />,
        children: [{ index: true, element: <Cart /> }]
      }
    ]
  },

  {
    path: '/checkout',
    element: <CheckoutLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'account',
        element: <ModalLayout />,
        children: [
          { index: true, element: <Account /> },
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { path: 'personal-info', element: <PersonalPage /> },
          { path: 'orders', element: <Orders /> },
          { path: 'favourites', element: <Favourites /> },
          { path: 'addresses', element: <Addresses /> },
          { path: 'edit-address', element: <EditAddress /> },
          { path: 'change-password', element: <ChangePassword /> }
        ]
      }
    ]
  },
  {
    element: <AdminRoute />,
    children: [
      {
        path: '/admin',
        element: <AdminLayout />,
        errorElement: <Error />,
        children: [
          { index: true, element: <AdminDashboard /> },
          {
            path: 'orders',
            element: <OrdersLayout />,
            children: [
              { index: true, element: <ActiveOrders /> },
              { path: 'order-history', element: <OrderHistory /> }
            ]
          },
          { path: 'customers', element: <AdminCustomers /> },
          { path: 'menu', element: <AdminMenu /> }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
