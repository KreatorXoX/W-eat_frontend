import { Outlet } from "react-router-dom";
import Basket from "../components/Basket/Basket";
import MainNavigation from "../shared/components/Navigation/MainNavigation";
import { useTheme } from "../context/themeStore";
import { useShoppingCart } from "../context/shoppingCartStore";
import Home from "../pages/Home";
import { useLocation } from "react-router-dom";
import OrangeActionButton from "../shared/components/UI-Elements/OrangeActionButton";
import { BsFillBasket2Fill } from "react-icons/bs";
type Props = {};

const RootLayout = (props: Props) => {
  const location = useLocation();
  const cart = useShoppingCart((state) => state.cart);
  const getCartTotal = useShoppingCart((state) => state.getCartTotal);
  const dark = useTheme((state) => state.dark);

  return (
    <main className={`h-screen ${dark ? "dark bg-gray-900" : "bg-slate-100"}`}>
      <MainNavigation />

      <div className="w-full dark:bg-gray-900 dark:text-slate-200 text-gray-700 flex flow-row pb-10">
        <div className="w-full lg:w-[calc(100vw-21.5rem)] flex justify-center items-center ">
          <Home />
        </div>
        <div className="hidden lg:inline-flex w-[20.5rem]">
          <Basket />
        </div>
      </div>
      {cart?.length > 0 && location.pathname === "/" && (
        <div className="inline-block lg:hidden fixed bottom-0 w-full px-3">
          <OrangeActionButton
            whereTo="/cart"
            price={getCartTotal()}
            text={
              <>
                <BsFillBasket2Fill className="inline" /> Basket
              </>
            }
          />
        </div>
      )}
      <Outlet />
    </main>
  );
};

export default RootLayout;
