import { ColumnDef } from "@tanstack/react-table";
import { orderHistory } from "../../../utils/table/orderHistory";
import { useMemo } from "react";
import Table from "../../../shared/components/Table/Table";
import { Link } from "react-router-dom";
interface Props {}

const OrderHistory = (props: Props) => {
  const columns = useMemo<ColumnDef<OrderHistory>[]>(
    () => [
      {
        header: "Id",
        accessorKey: "id",
        cell: ({ row }) => {
          return (
            <Link
              to={`/admin/orders/${row.original.id}`}
              className="text-blue-600 underline hover:no-underline"
            >{`${row.original.id}`}</Link>
          );
        },
      },
      {
        header: "Date",
        accessorKey: "orderDate",
      },
      {
        header: "Price",
        accessorKey: "price",
        cell: ({ row }) => {
          return `$ ${row.original.price.toFixed(2)}`;
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
      <Table
        {...{
          data: orderHistory,
          columns,
        }}
      />
    </div>
  );
};

export default OrderHistory;
