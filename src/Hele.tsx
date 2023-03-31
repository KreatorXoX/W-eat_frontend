import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import Table from "./Table";
import { orderHistory, OrderHistory } from "./tableData";

export default function Hele() {
  const columns = React.useMemo<ColumnDef<OrderHistory>[]>(
    () => [
      {
        header: "Id",
        accessorKey: "orderId",
      },
      {
        header: "Date",
        accessorKey: "orderDate",
      },
      {
        header: "Price",
        accessorKey: "price",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
    ],
    []
  );

  return (
    <>
      <Table
        {...{
          data: orderHistory,
          columns,
        }}
      />
    </>
  );
}
