export function getPaymentMethods() {
  const options = [
    { value: "cash", label: "Cash" },
    { value: "creditCard", label: "Credit Card" },
  ];
  return options;
}
