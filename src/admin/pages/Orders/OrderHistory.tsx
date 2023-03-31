import { ColumnDef } from "@tanstack/react-table";
import { orderHistory } from "../../../shared/utils/orderHistory";
import { useMemo } from "react";
import Table from "../../../shared/components/Table/Table";

interface Props {}

const OrderHistory = (props: Props) => {
  const columns = useMemo<ColumnDef<OrderHistory>[]>(
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
