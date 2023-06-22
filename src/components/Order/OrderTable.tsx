import { ColumnDef } from "@tanstack/react-table";

import { useMemo } from "react";

import { Link, useLocation } from "react-router-dom";
import Table from "../../shared/components/Table/Table";
import { formatDate } from "../../utils/formatDate";

const OrderTable = ({ orders }: { orders: IOrder[] }) => {
  const location = useLocation();
  const from = location.pathname.includes("checkout");

  const columns = useMemo<ColumnDef<IOrder>[]>(
    () => [
      {
        header: "Main Products",
        accessorKey: "products",
        cell: ({ row }) => {
          return (
            <Link
              to={`/${from ? "checkout/account" : "account"}/order-details/${
                row.original._id
              }`}
            >{`${row.original.orderItems.map(
              (order) => order.product.name
            )}`}</Link>
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
