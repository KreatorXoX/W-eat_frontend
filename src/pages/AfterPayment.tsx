import { Link, useSearchParams } from "react-router-dom";
import { useCheckoutStore } from "../context/checkoutStore";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
type Props = {};

const AfterPayment = (props: Props) => {
  const clearStore = useCheckoutStore((state) => state.clearStore);
  const orderId = useCheckoutStore((state) => state.orderId);

  const [searchParams] = useSearchParams();
  const success = searchParams.get("success") === "true";

  const { mutate: validateOrder } = useMutation({
    mutationFn: (orderId: string) =>
      axios.patch(`http://localhost:1337/api/orders/validate-order/${orderId}`),
  });

  const { mutate: deleteOrder } = useMutation({
    mutationFn: (orderId: string) =>
      axios.delete(`http://localhost:1337/api/orders/${orderId}`),
  });

  let content: JSX.Element | null = null;
  if (success) {
    content = (
      <div>
        <p>Your payment is successful</p>
        <p>Your order id is : {orderId}</p>
      </div>
    );
  }
  if (!success) {
    content = (
      <div>
        <p>Your payment is failed</p>
        <p>please try again or pick a different payment method</p>
        <Link to={"/checkout"}>Click this go to checkout form</Link>
      </div>
    );
  }

  useEffect(() => {
    if (success) {
      validateOrder(orderId!);
    } else if (!success) {
      deleteOrder(orderId!);
    }
  }, []);

  return content;
};

export default AfterPayment;
