import { Outlet } from "react-router-dom";
import Basket from "../components/Basket/Basket";
import MainNavigation from "../shared/components/Navigation/MainNavigation";
import { useTheme } from "../context/themeStore";
import CheckOut from "../pages/CheckOut";
type Props = {};

const CheckoutLayout = (props: Props) => {
  const dark = useTheme((state) => state.dark);
  return (
    <main className={`${dark ? "dark bg-gray-900" : "bg-slate-100"}`}>
      <MainNavigation />
      <div className="flex text-gray-700 dark:bg-gray-900 dark:text-slate-200">
        <div className="w-screen px-2 pt-1 lg:w-[calc(100vw-20rem)]">
          <CheckOut />
        </div>
        <aside className="hidden w-0 lg:inline lg:w-[20rem]">
          <div className="sticky top-0 w-full rounded-xl">
            <Basket />
          </div>
        </aside>

        <Outlet />
      </div>
    </main>
  );
};

export default CheckoutLayout;
