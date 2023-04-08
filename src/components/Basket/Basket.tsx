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
    <div
      className="h-screen border-l-gray-500/20 bg-slate-100 px-4
    dark:border-l dark:border-l-gray-600 dark:bg-gray-900 lg:border-l
    "
    >
      <div className="flex  h-full flex-col space-y-3 text-gray-800 dark:text-slate-100">
        <h2 className="my-5 text-center text-2xl font-bold">Basket</h2>
        <div className="no-scrollbar h-full overflow-y-scroll">
          {cartProducts.length > 0 ? (
            cartProducts.map((item) => <BasketItem key={item.id} item={item} />)
          ) : (
            <div className="flex flex-col items-center justify-center px-4 pt-28  text-4xl">
              <TbPaperBag />
              <p className="mt-5 mb-2 text-2xl font-bold">Fill your Bag</p>
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
