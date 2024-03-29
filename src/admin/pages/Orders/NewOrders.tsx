import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import OrderItem from "../../components/Orders/OrderItem";
import { useState } from "react";

import { formatDate } from "../../../utils/formatDate";
import OrderServices from "../../../api/services/order.service";
interface Props {}

const NewOrders = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const { data: orders } = OrderServices.usePaginatedPendingOrders(page);

  const totalPages = Math.ceil(orders ? orders.length / 8 : 1);

  return (
    <div className="mt-10 flex h-full items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center space-y-10 px-4 pb-10">
        {orders && orders.length > 0 ? (
          <>
            <h2 className="text-2xl font-semibold text-green-800">
              New Orders
            </h2>
            <ul className="mx-auto w-full max-w-7xl space-y-4">
              {orders.map((order) => (
                <OrderItem
                  key={order._id}
                  order={{
                    id: order._id,
                    orderDate: formatDate(order.createdAt!)!,
                    price: order.totalPrice!,
                    status: order.status,
                  }}
                />
              ))}
            </ul>
            <div className="flex items-center gap-4 text-3xl">
              <CgChevronLeft
                onClick={() =>
                  setPage((prev) => {
                    if (prev - 1 < 1) return 1;
                    else return prev - 1;
                  })
                }
                className="hover:cursor-pointer hover:text-gray-500"
              />
              <p className="text-sm">
                Page : {page} of <span>{totalPages}</span>
              </p>
              <CgChevronRight
                onClick={() =>
                  setPage((prev) => {
                    if (prev === totalPages) return totalPages;
                    return prev + 1;
                  })
                }
                className="hover:cursor-pointer hover:text-gray-500"
              />
            </div>
          </>
        ) : (
          <p className="h-16 text-center text-xl">
            No new orders,{" "}
            <span className="italic text-red-500 underline">yet</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default NewOrders;
