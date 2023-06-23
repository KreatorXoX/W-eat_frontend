import { Link, useOutletContext } from "react-router-dom";

import OrderTable from "../components/Order/OrderTable";
import OrderServices from "../api/services/order.service";

interface Props {}

const ClientOrderHistory = (props: Props) => {
  const ctx: UserContext = useOutletContext();
  const { data: userOrders, isLoading } = OrderServices.useOrdersByUser(ctx.id);
  return (
    <div>
      <ul>
        {isLoading ? (
          <p>Loading</p>
        ) : userOrders?.allOrders && userOrders.allOrders.length > 0 ? (
          <OrderTable
            orders={userOrders.allOrders.filter(
              (order) =>
                order.status === "canceled" || order.status === "delivered"
            )}
          />
        ) : (
          <p className="h-16 text-center text-xl">
            You never placed an order,{" "}
            <span className="italic text-red-500 underline">yet</span>
          </p>
        )}
      </ul>
    </div>
  );
};

export default ClientOrderHistory;
