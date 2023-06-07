export function getPaymentMethods() {
  const options = [
    { value: "pay at door", label: "Cash" },
    { value: "card", label: "Credit Card" },
  ];
  return options;
}
