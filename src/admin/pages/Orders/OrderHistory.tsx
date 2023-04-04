import { ColumnDef } from "@tanstack/react-table";
import { orderHistory } from "../../../shared/utils/table/orderHistory";
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
    <div className="h-full flex flex-col justify-center items-center sm:px-10">
      <h2 className="mt-10 font-semibold text-2xl text-green-800">
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
