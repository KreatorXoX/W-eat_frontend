import OrderItem from "../../components/Orders/OrderItem";

interface Props {}

const ActiveOrders = (props: Props) => {
  return (
    <div className="mt-10 flex h-full items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center space-y-10 px-4">
        <h2 className="text-2xl font-semibold text-green-800">Active Orders</h2>

        <ul className="mx-auto w-full max-w-7xl space-y-4">
          <OrderItem order={{ id: "1", orderDate: "22/04/2023", price: 10 }} />
          <OrderItem order={{ id: "2", orderDate: "15/05/2023", price: 12 }} />
        </ul>
      </div>
    </div>
  );
};

export default ActiveOrders;
