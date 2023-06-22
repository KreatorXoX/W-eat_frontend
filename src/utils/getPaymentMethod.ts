export function getPaymentMethods() {
  const options = [
    { value: PaymentMethod.PAD, label: "Cash" },
    { value: PaymentMethod.CARD, label: "Credit Card" },
  ];
  return options;
}
