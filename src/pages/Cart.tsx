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
    <div className="z-20 h-screen w-full px-4 text-gray-800 dark:text-slate-100">
      <div className="flex h-full w-full flex-col">
        <div className="mb-5 flex w-full items-center justify-between">
          <h2 className="my-5 w-full text-left text-xl font-bold">Basket</h2>
          <Link to=".." className="text-3xl">
            <MdClose />
          </Link>
        </div>
        <div className="flex h-full flex-col gap-4 overflow-y-scroll ">
          {cartItems?.length > 0 &&
            cartItems.map((item) => <BasketItem key={item.id} item={item} />)}
        </div>
        <BasketFooter cartTotal={getCartTotal()} />
      </div>
    </div>
  );
};

export default Cart;
