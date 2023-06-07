import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import MainHeader from "./MainHeader";

import ThemeButton from "../UI-Elements/ThemeButton";

const MainNavigation = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <>
      <MainHeader>
        <h1 className="font-serif text-xl dark:text-slate-200">
          <Link to="/">
            <span className="text-red-400">w</span>/
            <span className="text-blue-400">EAT</span>
          </Link>
        </h1>
        <h2 className="text-2xl font-semibold tracking-widest text-violet-900 dark:text-slate-300">
          {path.split("/")[1] === "checkout" ? "Checkout" : "Menu"}
        </h2>
        <div className="flex items-center justify-center gap-4">
          <ThemeButton />
          <button
            className=" rounded-full p-2 duration-200  hover:bg-gray-200 active:bg-gray-300 dark:text-white dark:hover:bg-gray-400 dark:active:bg-gray-500"
            onClick={() => {
              navigate(
                `${
                  path === "/" ? "" : path === "/checkout" ? path : ""
                }/account`
              );
            }}
          >
            <AiOutlineMenu className="text-2xl " />
          </button>
        </div>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
