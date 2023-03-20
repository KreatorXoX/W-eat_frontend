import { Outlet } from "react-router-dom";
import Basket from "../components/Basket";
import MainNavigation from "../shared/components/Navigation/MainNavigation";
import { useTheme } from "../context/themeStore";
import { useShoppingCart } from "../context/shoppingCartStore";
import Home from "../pages/Home";
import CartButton from "../components/CartButton";
import { useLocation } from "react-router-dom";
type Props = {};

const RootLayout = (props: Props) => {
  const location = useLocation();
  const cart = useShoppingCart((state) => state.cart);
  const dark = useTheme((state) => state.dark);

  return (
    <main className={`h-screen ${dark ? "dark bg-gray-600" : "bg-slate-100"} `}>
      <MainNavigation />

      <div className="w-full dark:bg-gray-700 bg-slate-100 dark:text-slate-200 text-gray-700 flex flow-row pb-10">
        <div className="w-full lg:w-[calc(100vw-21.5rem)] flex justify-center items-center dark:border-r dark:border-r-slate-200/20 border-r-gray-500/20 lg:border-r">
          <Home />
        </div>
        <div className="hidden lg:inline-flex lg:w-[20.4rem]">
          <Basket />
        </div>
      </div>
      {cart?.length > 0 && location.pathname === "/" && (
        <div className="inline-block lg:hidden fixed bottom-0 w-full px-3">
          <CartButton />
        </div>
      )}
      <Outlet />
    </main>
  );
};

export default RootLayout;
