import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ModalLayout from './layouts/ModalLayout'
import RootLayout from './layouts/RootLayout'
import CheckoutLayout from './layouts/CheckoutLayout'
import Account from './pages/Account'
import Auth from './pages/Auth'
import Error from './pages/Error'

import Nutritions from './pages/Nutritions'
import Cart from './pages/Cart'
import CartLayout from './layouts/CartLayout'
import TimePicker from './components/checkout/TimePicker'
import PaymentMethod from './components/checkout/PaymentMethod'
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
          { path: '/account/auth', element: <Auth /> }
        ]
      },
      {
        path: '/nutritions',
        element: <ModalLayout />,
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
          { path: 'auth', element: <Auth /> }
        ]
      },
      {
        path: 'delivery-time',
        element: <ModalLayout />,
        children: [{ index: true, element: <TimePicker /> }]
      },
      {
        path: 'payment-method',
        element: <ModalLayout />,
        children: [{ index: true, element: <PaymentMethod /> }]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
