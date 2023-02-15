import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsBag, BsHeart } from "react-icons/bs";
import MainHeader from "./MainHeader";

import SideDrawer from "./SideDrawer";
import Backdrop from "../UI-Elements/Backdrop";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = useCallback(() => {
    setDrawerIsOpen(false);
  }, []);

  return (
    <>
      <SideDrawer show={drawerIsOpen}>
        <div className=" px-4 space-y-6">
          <div className="flex flex-row justify-between mt-4 items-center text-gray-700">
            <h1 className="font-bold  text-xl">My account</h1>
            <AiOutlineClose
              onClick={closeDrawerHandler}
              className="text-2xl cursor-pointer"
            />
          </div>
          <div className="flex flex-row gap-4 justify-evenly items-center w-full text-lg font-semibold">
            <button className="bg-gray-200 auth--button text-gray-700">
              Sign in
            </button>
            <button className="bg-orange-500 auth--button text-white">
              Create Account
            </button>
          </div>
          <div className="px-2 flex flex-col gap-5">
            <div className="cursor-pointer flex justify-start items-center gap-6">
              <BsBag className="text-2xl inline" />
              <span className="text-gray-500">Orders</span>
            </div>
            <div className="cursor-pointer flex justify-start items-center gap-6">
              <BsHeart className="text-2xl inline" />
              <span className="text-gray-500">Favorites</span>
            </div>
          </div>
        </div>
      </SideDrawer>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <MainHeader>
        <h1 className="text-xl font-serif">
          <Link to="/">
            w/<span className="text-blue-400">EAT</span>
          </Link>
        </h1>
        <h2 className="font-semibold text-xl text-violet-900">Menu</h2>
        <button
          className="rounded-full active:bg-gray-200 p-2"
          onClick={openDrawerHandler}
        >
          <AiOutlineMenu className="text-2xl" />
        </button>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
