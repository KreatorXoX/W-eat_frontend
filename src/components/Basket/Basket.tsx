import { useShoppingCart } from "../../context/shoppingCartStore";
import { TbPaperBag } from "react-icons/tb";

import BasketItem from "./BasketItem";
import BasketFooter from "./BasketFooter";

type Props = {};

// there needs to be a fixed minimum delivery amount to disable/enable checkout button
// if minimum amount isnt reached, then show an simple information message.

const Basket = (props: Props) => {
  const cartProducts = useShoppingCart((state) => state.cart);

  const getCartTotal = useShoppingCart((state) => state.getCartTotal);

  return (
    <div className="h-screen px-4 bg-slate-100 dark:bg-gray-900
    dark:border-l dark:border-l-gray-600 border-l-gray-500/20 lg:border-l
    ">
      <div className="h-full  text-gray-800 dark:text-slate-100 space-y-3 flex flex-col">
        <h2 className="text-center font-bold text-2xl my-5">Basket</h2>
        <div className="h-full overflow-y-scroll no-scrollbar">
          {cartProducts.length > 0 ? (
            cartProducts.map((item) => <BasketItem key={item.id} item={item} />)
          ) : (
            <div className="pt-28 flex flex-col justify-center items-center text-4xl  px-4">
              <TbPaperBag />
              <p className="text-2xl font-bold mt-5 mb-2">Fill your Bag</p>
              <span className="text-base">Your bag is Empty</span>
            </div>
          )}
        </div>

        {cartProducts?.length > 0 && (
          <BasketFooter cartTotal={getCartTotal()} />
        )}
      </div>
    </div>
  );
};

export default Basket;
