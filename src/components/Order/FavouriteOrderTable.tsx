import { ColumnDef } from "@tanstack/react-table";

import { useMemo } from "react";

import { Link } from "react-router-dom";
import Table from "../../shared/components/Table/Table";
import { formatDate } from "../../utils/formatDate";

const FavouriteOrderTable = ({ orders }: { orders: IOrder[] }) => {
  const columns = useMemo<ColumnDef<IOrder>[]>(
    () => [
      {
        header: "Id",
        accessorKey: "_id",
        cell: ({ row }) => {
          return (
            <Link
              to={`/orders/${row.original._id}`}
              className="text-blue-600 underline hover:no-underline dark:text-gray-200"
            >{`${row.original._id}`}</Link>
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

export default FavouriteOrderTable;
