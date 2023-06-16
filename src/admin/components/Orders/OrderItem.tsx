import { useNavigate } from "react-router-dom";
import GenericButton from "../../../shared/components/UI-Elements/GenericButton";
type Props = {
  order: Order;
};

const OrderItem = ({ order }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-between rounded-md px-2 py-1 text-xs text-gray-700 ring-2 ring-green-600 transition-colors duration-150 hover:cursor-pointer
    hover:bg-gray-200 sm:text-sm md:text-base 
    "
    >
      <div
        onClick={() => navigate(`/admin/orders/${order.id}`)}
        className="flex w-full justify-between pr-3 md:pr-10"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className=" font-semibold">Order Id</h1>
          <h2>{order.id.slice(0, 7)}</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-semibold">Order Date</h1>
          <h2>{order.orderDate}</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-semibold">Price</h1>
          <h2>$ {order.price.toFixed(2)}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 border-l-[2px] border-green-600 pl-2">
        <h1 className="font-semibold">Actions</h1>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <GenericButton
            classes="rounded-lg"
            text={"Accept"}
            onClick={() => console.log("order accepted")}
          />
          <GenericButton
            classes="rounded-lg"
            text={"Decline"}
            color="red"
            onClick={() => console.log("order cancelled")}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
