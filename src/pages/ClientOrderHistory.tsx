import { Link, useOutletContext } from "react-router-dom";

import OrderTable from "../components/Order/OrderTable";
import OrderServices from "../api/services/order.service";

interface Props {}

const ClientOrderHistory = (props: Props) => {
  const ctx: UserContext = useOutletContext();
  const { data: userOrders, isLoading } = OrderServices.useOrdersByUser(ctx.id);
  const completedOrders = userOrders?.allOrders.filter(
    (order) => order.status === "canceled" || order.status === "delivered"
  );
  return (
    <div>
      <ul>
        {isLoading ? (
          <p>Loading</p>
        ) : completedOrders && completedOrders.length > 0 ? (
          <OrderTable orders={completedOrders} />
        ) : (
          <p className="h-16 text-center text-xl">
            There are no completed orders,{" "}
            <span className="italic text-red-500 underline">yet</span>
          </p>
        )}
      </ul>
    </div>
  );
};

export default ClientOrderHistory;
