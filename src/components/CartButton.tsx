import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../context/cartStore";
type Props = {};

const CartButton = (props: Props) => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const navigate = useNavigate();
  return (
    <div
      className="h-14
    flex items-center justify-center
    "
    >
      <button
        onClick={() => navigate("/cart")}
        className="bg-orange-600 w-full rounded-full py-2
       text-slate-100 font-semibold
      "
      >
        <span className="items-center flex justify-center gap-2">
          <BsFillBasket2Fill className="inline" />
          <span>Basket</span>
          <span className=" tracking-wide">(€ {totalPrice.toFixed(2)})</span>
        </span>
      </button>
    </div>
  );
};

export default CartButton;
