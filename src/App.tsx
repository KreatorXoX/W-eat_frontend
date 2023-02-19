import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalLayout from "./layouts/ModalLayout";
import RootLayout from "./layouts/RootLayout";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Error from "./pages/Error";

import Nutritions from "./pages/Nutritions";
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
          { path: "/account/auth", element: <Auth /> },
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
