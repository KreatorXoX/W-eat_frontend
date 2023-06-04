import { AiFillCheckCircle } from "react-icons/ai";
import { useCheckoutStore } from "../context/checkoutStore";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartStore";
type Props = {};

const AfterOrder = (props: Props) => {
  const clearStore = useCheckoutStore((state) => state.clearStore);
  const orderId = useCheckoutStore((state) => state.orderId);
  const clearCart = useShoppingCart((state) => state.clearCart);

  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center space-y-14 rounded-lg bg-zinc-200 p-16">
      <h2 className="text-4xl font-semibold text-gray-700">
        Your order has been received
      </h2>
      <div className="flex flex-col items-center space-y-5 font-medium text-gray-600">
        <AiFillCheckCircle className="text-7xl text-green-600" />
        <p className="text-2xl">Thank you for choosing us !</p>
        <span className="italic">Your order id is : {orderId}</span>
      </div>
      <Link
        to="/"
        onClick={() => {
          clearCart();
          clearStore();
        }}
        className="rounded bg-orange-500 px-8 py-3 text-slate-100 hover:bg-orange-600"
      >
        Continue to w/eat
      </Link>
    </div>
  );
};

export default AfterOrder;
