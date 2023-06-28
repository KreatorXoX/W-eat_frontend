import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../context/checkoutStore";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AiFillCheckCircle } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { useShoppingCart } from "../context/shoppingCartStore";

type Props = {};

const AfterPayment = (props: Props) => {
  const clearStore = useCheckoutStore((state) => state.clearStore);
  const orderId = useCheckoutStore((state) => state.orderId);
  const clearCart = useShoppingCart((state) => state.clearCart);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success") === "true";

  const { mutate: validateOrder } = useMutation({
    mutationFn: (updateData: OrderUpdate) =>
      axios.patch(
        `${import.meta.env.VITE_BASE_URL}/orders/${orderId}`,
        updateData
      ),
  });

  const { mutate: deleteOrder } = useMutation({
    mutationFn: (orderId: string) =>
      axios.delete(`${import.meta.env.VITE_BASE_URL}/orders/${orderId}`),
  });

  let content: JSX.Element | null = null;
  if (success) {
    content = (
      <div className="flex flex-col items-center justify-center space-y-14 rounded-lg bg-slate-200 p-16">
        <h2 className="text-4xl font-semibold text-gray-700">
          Your payment has been received
        </h2>
        <div className="flex flex-col items-center space-y-5 font-medium text-gray-600">
          <AiFillCheckCircle className="text-7xl text-green-600" />
          <p className="text-2xl">
            Thank you for your purchase & choosing us !
          </p>
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
  }
  if (!success) {
    content = (
      <div className="flex flex-col items-center justify-center space-y-14 rounded-lg bg-slate-200 p-16">
        <h2 className="text-4xl font-semibold text-gray-700">
          Your payment has been failed
        </h2>
        <div className="flex flex-col items-center space-y-5 font-medium text-gray-600">
          <CgDanger className="text-7xl text-red-600" />
          <p className="text-2xl">We could not take your order !</p>
          <span className="italic">
            Please try again with a different payment method
          </span>
        </div>
        <div className="flex gap-5 text-lg">
          <Link
            to="/checkout"
            onClick={clearStore}
            className="rounded bg-green-500 px-8 py-2 text-slate-100 hover:bg-green-600"
          >
            Back to checkout
          </Link>
          <Link
            to="/"
            onClick={clearStore}
            className="rounded bg-orange-500 px-8 py-2 text-slate-100 hover:bg-orange-600"
          >
            Continue to w/eat
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (!orderId) {
      navigate("/");
    }
    if (success && orderId) {
      validateOrder({ paymentStatus: "successful" });
    } else if (!success && orderId) {
      deleteOrder(orderId!);
    }
  }, []);

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center
      bg-slate-100"
    >
      {content}
    </div>
  );
};

export default AfterPayment;
