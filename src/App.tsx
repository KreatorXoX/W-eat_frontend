import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ModalLayout from './layouts/ModalLayout'
import RootLayout from './layouts/RootLayout'
import Account from './pages/Account'
import Auth from './pages/Auth'
import Error from './pages/Error'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/account',
        element: <ModalLayout />,
        children: [
          { index: true, element: <Account /> },
          { path: '/account/auth', element: <Auth /> }
        ]
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:id',
        element: <ProductDetail />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
