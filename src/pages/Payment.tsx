import { useSearchParams } from "react-router-dom";
import { useStripeStore } from "../context/stripeStore";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
type Props = {};

const Payment = (props: Props) => {
  const sessionId = useStripeStore((state) => state.sessionId);
  const orderId = useStripeStore((state) => state.orderId);
  const clearSession = useStripeStore((state) => state.clearSession);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success") === "true";

  const { mutate: updateOrderPaymentStatus } = useMutation({
    mutationFn: ({
      sessionId,
      orderId,
      isSuccess,
    }: {
      sessionId: string | null;
      orderId: string;
      isSuccess: boolean;
    }) => {
      return axios.patch(`http://localhost:1337/api/orders/${orderId}`, {
        sessionId,
        orderId,
        isSuccess,
      });
    },
    onSuccess: () => {
      clearSession();
    },
  });
  useEffect(() => {
    if (success && sessionId) {
      updateOrderPaymentStatus({
        sessionId,
        orderId,
        isSuccess: success,
      });
    } else if (!success && sessionId) {
      updateOrderPaymentStatus({
        sessionId,
        orderId,
        isSuccess: success,
      });
    }
  }, []);
  return <div>Payment is {success ? "succesfull" : "failed"}</div>;
};

export default Payment;
