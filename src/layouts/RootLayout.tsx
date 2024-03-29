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
    <main className={`${dark ? "dark bg-gray-900" : "bg-slate-100"}`}>
      <MainNavigation />
      <div className="flex text-gray-700 dark:bg-gray-900 dark:text-slate-200">
        <div className="w-screen px-2 pt-1 lg:w-[calc(100vw-20rem)]">
          <Home />
        </div>
        <aside className="hidden w-0 lg:inline lg:w-[20rem]">
          <div className="sticky top-0 w-full rounded-xl">
            <Basket />
          </div>
        </aside>
        {cart?.length > 0 && location.pathname === "/" && (
          <div className="fixed bottom-0 inline-block w-full px-3 lg:hidden">
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
      </div>
    </main>
  );
};

export default RootLayout;
