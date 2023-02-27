import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/cartStore";
import CheckoutForm from "../components/Forms/Checkout";
type Props = {};

const CheckOut = (props: Props) => {
  const cartItems = useCart((state) => state.items);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
  }, []);
  return (
    <div className="h-full max-w-2xl lg:max-w-6xl w-full">
      <div className="hidden lg:inline-block m-5">
        <h1 className="text-2xl font-bold tracking-wide">CheckOut</h1>
        <span className="text-sm tracking-widest">Restraunt Name</span>
      </div>
      <div className="m-4 p-5 dark:text-slate-100 text-gray-800 lg:border xs:border-none rounded-lg dark:border-gray-500 space-y-4">
        <CheckoutForm />
      </div>
      <Link to="delivery-time">Delivery</Link>
      <Link to="payment-method">Payment Method</Link>
    </div>
  );
};

export default CheckOut;
