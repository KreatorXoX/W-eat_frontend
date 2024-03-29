import OrangeActionButton from "../../shared/components/UI-Elements/OrangeActionButton";

type Props = {
  cartTotal: number;
};

const BasketFooter = ({ cartTotal }: Props) => {
  return (
    <div className="sticky bottom-0 bg-slate-100 pb-2 dark:bg-gray-900">
      <div className="mb-2 flex flex-col space-y-3 pt-4">
        <div className="flex flex-row justify-between">
          <span>Subtotal</span>
          <span>€ {cartTotal.toFixed(2)}</span>
        </div>

        <div className="flex flex-row justify-between">
          <span>Delivery cost</span>
          <span>Free</span>
        </div>

        <div className="flex flex-row justify-between font-semibold">
          <span>Total</span>
          {/* plus the delivery cost */}
          <span>€ {cartTotal.toFixed(2)}</span>
        </div>
      </div>
      {cartTotal > 0 && location?.pathname !== "/checkout" && (
        <OrangeActionButton
          whereTo="/checkout"
          text="Checkout"
          price={cartTotal}
        />
      )}
    </div>
  );
};

export default BasketFooter;
