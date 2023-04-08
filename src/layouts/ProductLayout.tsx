import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/themeStore";

type Props = {};

const ProductLayout = (props: Props) => {
  const navigate = useNavigate();
  const dark = useTheme((state) => state.dark);
  const location = useLocation().pathname;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className={`${
          dark ? "bg-gray-800" : "bg-pink-500"
        }  fixed right-0 top-0 h-full w-full lg:flex
        lg:items-center lg:justify-center lg:bg-zinc-700/80`}
      >
        <div
          className={`${
            dark ? "bg-gray-800" : "bg-slate-50"
          }  absolute top-0 bottom-0 right-0 left-0 z-20
          m-auto h-full
      w-full rounded-xl lg:h-fit lg:w-[40rem] lg:py-5
          `}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
