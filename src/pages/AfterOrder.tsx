import { useEffect } from "react";
import { useCheckoutStore } from "../context/checkoutStore";
type Props = {};

const AfterOrder = (props: Props) => {
  const orderId = useCheckoutStore((state) => state.orderId);
  const clearStore = useCheckoutStore((state) => state.clearStore);
  useEffect(() => {
    return () => clearStore();
  }, []);
  return <div>Your order has been Taken and Your Order Id is : {orderId} </div>;
};

export default AfterOrder;
