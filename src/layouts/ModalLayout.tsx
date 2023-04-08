import { useEffect } from "react";
import { Outlet, useNavigate, useLocation, To } from "react-router-dom";
import { useTheme } from "../context/themeStore";

type Props = {};

const ModalLayout = (props: Props) => {
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
        onClick={() => {
          location.includes("checkout")
            ? navigate("/checkout")
            : location.includes("admin")
            ? navigate(-1)
            : navigate("/");
        }}
        className="fixed right-0 top-0 h-full w-full lg:bg-gray-700/80"
      ></div>
      <div
        className={`${
          dark ? "bg-gray-800" : "bg-slate-50"
        }  absolute top-0 bottom-0 right-0 left-0 z-20 m-auto
          h-full w-full
      overflow-auto lg:h-fit lg:w-[40rem] lg:rounded-xl lg:py-5
          `}
      >
        <Outlet />
      </div>
      {/* <div
        onClick={() => navigate(-1)}
        className={`${
          dark ? 'bg-gray-800' : 'bg-pink-500'
        }  lg:bg-zinc-700/80 fixed right-0 top-0 w-full h-full`}
        lg:flex lg:justify-center lg:items-center`}
      >
        <div
          className={`${
            dark ? 'bg-gray-800' : 'bg-slate-50'
          }  h-full w-full lg:h-fit lg:py-5 lg:w-[40rem] rounded-xl
          absolute z-20
      top-0 bottom-0 right-0 left-0 m-auto
          `}
        >
          <Outlet />
        </div>
      </div> */}
    </>
  );
};

export default ModalLayout;
