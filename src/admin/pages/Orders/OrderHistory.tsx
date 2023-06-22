import { ColumnDef } from "@tanstack/react-table";
import { orderHistory } from "../../../utils/table/orderHistory";
import { useMemo } from "react";
import Table from "../../../shared/components/Table/Table";
import { Link } from "react-router-dom";
import OrderServices from "../../../api/services/order.service";
import { formatDate } from "../../../utils/formatDate";
interface Props {}

const OrderHistory = (props: Props) => {
  const { data: orders } = OrderServices.useOrders();

  const columns = useMemo<ColumnDef<IOrder>[]>(
    () => [
      {
        header: "Order ID",
        cell: ({ row }) => {
          return (
            <Link
              to={`/admin/orders/${row.original._id}`}
              className="text-xs text-blue-600 underline hover:no-underline"
            >{`${row.original._id.slice(0, 8)}`}</Link>
          );
        },
      },
      {
        header: "Date",
        cell: ({ row }) => {
          return `${formatDate(row.original.createdAt)}`;
        },
      },
      {
        header: "Price",
        accessorKey: "price",
        cell: ({ row }) => {
          return `$ ${row.original.totalPrice?.toFixed(2)}`;
        },
      },
      {
        header: "Status",
        accessorKey: "status",
      },
    ],
    []
  );
  return (
    <div className="flex h-full flex-col items-center justify-center sm:px-10">
      <h2 className="mt-10 text-2xl font-semibold text-green-800">
        Order History
      </h2>
      {orders ? (
        <Table
          {...{
            data: orders.filter((order) => order.status !== "pending"),
            columns,
          }}
        />
      ) : (
        <p>No orders are placed yet</p>
      )}
    </div>
  );
};

export default OrderHistory;
