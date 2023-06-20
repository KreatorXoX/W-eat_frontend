import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartStore";
import CheckoutForm from "../components/Forms/Checkout";
import { useAuthStore } from "../context/useAuthStore";
type Props = {};

const CheckOut = (props: Props) => {
  const cartItems = useShoppingCart((state) => state.cart);
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
    if (!token) navigate("/account/login");
    // and cartItems.total not equal or less than minimum amount
  }, [token, cartItems]);
  return (
    <div
      className="mx-auto w-full max-w-2xl
    dark:bg-gray-900 lg:max-w-6xl
    "
    >
      <div className="m-5 hidden lg:inline-block">
        <h1 className="text-2xl font-bold tracking-wide">CheckOut</h1>
        <span className="text-sm tracking-widest">Restraunt Name</span>
      </div>
      {token && <CheckoutForm />}
    </div>
  );
};

export default CheckOut;
