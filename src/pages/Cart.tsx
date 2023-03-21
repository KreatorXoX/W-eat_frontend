import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartStore";

import { MdClose } from "react-icons/md";
import BasketItem from "../components/Basket/BasketItem";
import BasketFooter from "../components/Basket/BasketFooter";
type Props = {};

const Cart = (props: Props) => {
  const navigate = useNavigate();
  const cartItems = useShoppingCart((state) => state.cart);
  const getCartTotal = useShoppingCart((state) => state.getCartTotal);

  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
  }, [cartItems.length]);

  return (
    <div className="h-screen w-full px-4 text-gray-800 dark:text-slate-100 z-20">
      <div className="w-full flex flex-col h-full">
        <div className="w-full flex justify-between items-center mb-5">
          <h2 className="w-full text-left font-bold text-xl my-5">Basket</h2>
          <Link to=".." className="text-3xl">
            <MdClose />
          </Link>
        </div>
        <div className="flex flex-col gap-4 overflow-y-scroll h-full ">
          {cartItems?.length > 0 &&
            cartItems.map((item) => <BasketItem key={item.id} item={item} />)}
        </div>
        <BasketFooter cartTotal={getCartTotal()} />
      </div>
    </div>
  );
};

export default Cart;
