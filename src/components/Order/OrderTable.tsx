import { ColumnDef } from "@tanstack/react-table";

import { useMemo } from "react";

import { Link } from "react-router-dom";
import Table from "../../shared/components/Table/Table";
import { formatDate } from "../../utils/formatDate";

const OrderTable = ({ orders }: { orders: IOrder[] }) => {
  const columns = useMemo<ColumnDef<IOrder>[]>(
    () => [
      {
        header: "Main Products",
        accessorKey: "products",
        cell: ({ row }) => {
          return (
            <p className="">{`${row.original.orderItems.map(
              (order) => order.product.name
            )}`}</p>
          );
        },
      },
      {
        header: "Date",
        accessorKey: "createdAt",
        cell: ({ row }) => {
          return formatDate(row.original.createdAt);
        },
      },
      {
        header: "Price",
        accessorKey: "totalPrice",
        cell: ({ row }) => {
          return `$ ${row.original.totalPrice!.toFixed(2)}`;
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
    <div className="flex h-full flex-col items-center justify-center">
      <Table
        {...{
          data: orders,
          columns,
        }}
      />
    </div>
  );
};

export default OrderTable;
