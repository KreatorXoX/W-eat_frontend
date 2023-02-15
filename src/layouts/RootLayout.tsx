import { Outlet } from "react-router-dom";
import Basket from "../components/Basket";
import MainNavigation from "../shared/components/Navigation/MainNavigation";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <main className="h-screen">
      <MainNavigation />
      <div className="h-screen w-full max-w-[100rem] mx-auto bg-red-400 grid grid-cols-12">
        <div className="col-span-full lg:col-span-9 flex justify-center items-center">
          <Outlet />
        </div>
        <div className="col-span-3 hidden lg:inline-block">
          <Basket />
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
