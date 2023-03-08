export function getPaymentMethods() {
  const options = [
    <option key="cash" value={"Cash"}>
      Cash
    </option>,
    <option key="credit-card" value={"Credit card"}>
      Credit Card
    </option>,
  ];
  return options;
}
