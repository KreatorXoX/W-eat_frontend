import { Outlet } from "react-router-dom";
import Basket from "../components/Basket";
import MainNavigation from "../shared/components/Navigation/MainNavigation";
import { useTheme } from "../context/themeStore";
import { useCart } from "../context/cartStore";
import Home from "../pages/Home";
import CartButton from "../components/CartButton";
import { useLocation } from "react-router-dom";
type Props = {};

const RootLayout = (props: Props) => {
  const location = useLocation();
  const cart = useCart((state) => state.items);
  const dark = useTheme((state) => state.dark);

  return (
    <main className={`h-screen ${dark ? "dark bg-gray-600" : "bg-slate-100"} `}>
      <MainNavigation />
      <div className="w-full dark:bg-gray-600 bg-slate-100 dark:text-slate-200 text-gray-700 flex flow-row">
        <div className="w-full lg:w-[calc(100vw-21.5rem)] flex justify-center items-center">
          <Home />
        </div>
        <div className="hidden lg:inline-flex lg:w-[21.5rem]">
          <Basket />
        </div>
      </div>
      <Outlet />
      {cart?.length > 0 && location.pathname === "/" && (
        <div className="inline-block lg:hidden fixed bottom-0 mb-2 w-full px-3">
          <CartButton />
        </div>
      )}
    </main>
  );
};

export default RootLayout;
