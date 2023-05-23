import { useSearchParams } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartStore";
import { useStripeStore } from "../context/stripeStore";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
type Props = {};

const Payment = (props: Props) => {
  const sessionId = useStripeStore((state) => state.sessionId);
  const clearSession = useStripeStore((state) => state.clearSession);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success") === "true";
  console.log(success);
  const { mutate: updateOrderPaymentStatus } = useMutation({
    mutationFn: (isSuccess: boolean) => {
      return axios.patch(`http://localhost:1337/api/orders/${sessionId}`, {
        isSuccess,
      });
    },
  });
  useEffect(() => {
    if (success) {
      updateOrderPaymentStatus(true);
    } else {
      updateOrderPaymentStatus(false);
    }
  }, []);
  return <div>Payment is {success}</div>;
};

export default Payment;
