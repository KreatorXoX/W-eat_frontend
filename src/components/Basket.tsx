import React from "react";
import { TbPaperBag } from "react-icons/tb";
type Props = {};

const Basket = (props: Props) => {
  return (
    <div
      className="w-[22rem] bg-slate-100 dark:bg-gray-600 basket dark:border-l dark:border-l-slate-200/20 border-l-gray-500/20 border-l
     "
    >
      <div className="h-screen text-gray-800 dark:text-slate-100 space-y-28 flex flex-col items-center">
        <h2 className=" font-bold text-2xl mt-4">Basket</h2>
        <div className="flex flex-col justify-center items-center text-4xl">
          <TbPaperBag />
          <p className="text-2xl font-bold mt-5 mb-2">Fill your Bag</p>
          <span className="text-base">Your bag is Empty</span>
        </div>
      </div>
    </div>
  );
};

export default Basket;
