import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import Table from "../../../shared/components/Table/Table";
import { customerList } from "../../../utils/table/customerTable";
import GenericButton from "../../../shared/components/UI-Elements/GenericButton";

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
            <GenericButton
              classes="rounded-lg"
              text="Del"
              color="red"
              onClick={() => console.log(row.original.id + "is deleted")}
            />
            <GenericButton
              classes="rounded-lg"
              text="Sus"
              color="gray"
              onClick={() => console.log(row.original.id + "is suspended")}
            />
            <GenericButton
              classes="rounded-lg"
              text="Act"
              onClick={() => console.log(row.original.id + "is activated")}
            />
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="flex h-full flex-col items-center py-5 sm:px-10">
      <h2 className="text-2xl font-semibold text-green-800">Customers</h2>
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
