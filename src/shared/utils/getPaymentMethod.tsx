export function getPaymentMethods() {
  const options = [
    <option key="cash" value={"cash"}>
      Cash
    </option>,
    <option key="credit-card" value={"credit-card"}>
      Credit Card
    </option>,
  ];
  return options;
}
