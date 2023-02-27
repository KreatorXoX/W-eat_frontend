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
        <h1 className="text-xl font-serif dark:text-slate-200">
          <Link to="/">
            w/<span className="text-blue-400">EAT</span>
          </Link>
        </h1>
        <h2 className="font-semibold text-xl text-violet-900 dark:text-slate-300">
          {path.split("/")[1] === "checkout" ? "Checkout" : "Menu"}
        </h2>
        <div className="flex justify-center items-center gap-4">
          <ThemeButton />
          <button
            className=" dark:text-white rounded-full dark:active:bg-gray-500  dark:hover:bg-gray-400 active:bg-gray-300 hover:bg-gray-200 duration-200 p-2"
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
