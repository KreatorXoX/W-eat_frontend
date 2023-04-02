import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import Table from "../../../shared/components/Table/Table";
import { customerList } from "../../../shared/utils/table/customerTable";

interface Props {}

const Customers = (props: Props) => {
  const columns = useMemo<ColumnDef<Customer>[]>(
    () => [
      {
        header: "Id",
        accessorKey: "id",
        // cell: ({ row }) => {
        //   return (
        //     <Link
        //       to={`/admin/orders/${row.original.orderId}`}
        //       className="text-blue-600 underline hover:no-underline"
        //     >{`${row.original.orderId}`}</Link>
        //   );
        // },
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
      {
        header: "Action",
        cell: ({ row }) => (
          <div className="flex justify-evenly">
            <button
              className="p-1 bg-red-200 text-red-600 rounded-lg"
              onClick={() => console.log(row.original.id + "is deleted")}
            >
              Del
            </button>
            <button
              className="p-1 bg-gray-200 text-gray-600 rounded-lg"
              onClick={() => console.log(row.original.id + "is suspended")}
            >
              Sus
            </button>
            <button
              className="p-1 bg-green-200 text-green-600 rounded-lg"
              onClick={() => console.log(row.original.id + "is activated")}
            >
              Act
            </button>
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="h-full flex flex-col items-center sm:px-10 py-5">
      <h2 className="font-semibold text-2xl text-green-800">Customers</h2>
      <Table
        {...{
          data: customerList,
          columns,
        }}
      />
    </div>
  );
};

export default Customers;
