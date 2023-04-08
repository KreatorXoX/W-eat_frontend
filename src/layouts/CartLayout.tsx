import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/themeStore";
import useWindowSize from "../shared/utils/useWindowSize";
type Props = {};

const CartLayout = (props: Props) => {
  const dark = useTheme((state) => state.dark);
  const windowDimensions = useWindowSize();

  useEffect(() => {
    if (windowDimensions.width > 1024) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [windowDimensions.width]);

  return (
    <div
      className={`${
        dark ? "dark:bg-gray-900" : "bg-slate-100"
      } fixed top-0 flex h-full
        w-full items-center justify-center lg:hidden`}
    >
      <Outlet />
    </div>
  );
};

export default CartLayout;
