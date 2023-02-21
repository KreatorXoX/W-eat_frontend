import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartStore";
import { TbPlus, TbMinus } from "react-icons/tb";
type Props = {};

const Cart = (props: Props) => {
  const navigate = useNavigate();
  const cartItems = useCart((state) => state.items);
  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
  }, []);
  return (
    <div className="h-screen w-full px-4  text-gray-800 dark:text-slate-100 flex flex-col items-center justify-between z-20">
      <div className="w-full">
        <h2 className="w-full text-left font-bold text-xl mt-4 mb-10">
          Basket
        </h2>
        <div className="flex flex-col gap-5 w-full">
          {cartItems?.length > 0 &&
            cartItems.map((item, idx) => (
              <div className="border-b border-b-gray-500 w-full">
                <div className="relative items-center gap-2 text-base font-[500]">
                  <span className="absolute top-0 left-0">2</span>
                  <div className="flex justify-between w-full pl-5">
                    <Link
                      to="#editProduct"
                      className="break-words
                    hover:no-underline decoration-gray-700 dark:decoration-slate-100 underline underline-offset-2"
                      key={idx}
                    >
                      {idx ? idx : ""} Pizza la margherita (medium)
                    </Link>
                    {/* item and price */}
                    <span className="whitespace-nowrap font-light">€ 8,00</span>
                  </div>
                </div>
                {/* extra suplements if there are any ?? */}
                <span className="flex items-center text-xs pl-5 italic font-light">
                  Parmesan, Sans Suplement, Oeufs
                </span>

                <div className="w-full flex justify-between items-center py-2 pl-5">
                  <button className="text-base underline hover:no-underline">
                    Add note
                  </button>
                  <div className="text-2xl w-20 flex justify-between px-2">
                    <button>
                      <TbMinus />
                    </button>
                    <button>
                      <TbPlus />
                    </button>
                  </div>
                </div>

                <div className="text-xs space-y-2">
                  <p className="text-xs tracking-wide bg-green-300/10 rounded-full pl-5 px-4 py-2 mb-4">
                    Note for this product
                  </p>

                  <div>
                    <button className="mb-4 pl-5 text-base underline hover:no-underline">
                      Edit note
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full space-y-10 mb-5">
        <div className="flex flex-col space-y-3 pt-4">
          <div className="flex flex-row justify-between">
            <span>Subtotal</span>
            <span>€ 16,00</span>
          </div>

          <div className="flex flex-row justify-between">
            <span>Delivery cost</span>
            <span>Free</span>
          </div>

          <div className="flex flex-row justify-between font-semibold">
            <span>Total</span>
            <span>€ 16,00</span>
          </div>
        </div>
        {cartItems?.length > 0 && (
          <button
            onClick={() => navigate("/checkout")}
            className="bg-orange-600 rounded-full py-2
      text-xl text-slate-100 font-semibold w-full
      "
          >
            <p className="flex items-center justify-center space-x-2 text-lg font-bold">
              <span>Checkout</span>
              <span className=" tracking-wide">($ 60,00)</span>
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
