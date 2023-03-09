import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/themeStore";

type Props = {};

const ModalLayout = (props: Props) => {
  const dark = useTheme((state) => state.dark);

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
          dark ? "bg-gray-600" : "bg-slate-50"
        }  lg:bg-gray-900/70 fixed right-0 top-0 w-full h-full
        lg:flex lg:justify-center lg:items-center z-10`}
      >
        <div
          className={`${
            dark ? "bg-gray-600" : "bg-slate-50"
          }  h-full w-full lg:h-[35rem] lg:w-[40rem] rounded-xl `}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ModalLayout;
