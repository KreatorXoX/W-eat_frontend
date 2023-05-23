import { useSearchParams } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartStore";
import { useEffect } from "react";
type Props = {};

const Payment = (props: Props) => {
  const clearCart = useShoppingCart((state) => state.clearCart);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    clearCart();
  }, []);
  return <div>Payment is {searchParams.get("success")}</div>;
};

export default Payment;
