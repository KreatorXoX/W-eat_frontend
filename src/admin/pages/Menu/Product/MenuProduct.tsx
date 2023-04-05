import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import Table from "../../../../shared/components/Table/Table";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { products } from "../../../../shared/utils/table/allProducts";
import { useNavigate } from "react-router-dom";
type Props = {};

const MenuProduct = (props: Props) => {
  const navigate = useNavigate();

  const columns = useMemo<ColumnDef<Item>[]>(
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
        header: "Price",
        accessorKey: "price",
        cell: ({ row }) => `$ ${row.original.price.toFixed(2)}`,
      },
      {
        header: "Category",
        accessorKey: "category",
      },
      {
        header: "Tag",
        accessorKey: "tag",
      },
      {
        header: "Action",
        cell: ({ row }) => (
          <div className="flex justify-evenly">
            <GenericButton
              classes="rounded-lg"
              text="Edit"
              color="yellow"
              onClick={() => navigate(`edit/${row.original.id}`)}
            />

            <GenericButton
              classes="rounded-lg"
              text="Delete"
              color="red"
              onClick={() => console.log(row.original.id + "deleted")}
            />
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="h-full flex flex-col items-center sm:px-10 py-5">
      <div className="w-full max-w-[60rem] flex justify-end items-center py-5">
        <GenericButton
          classes="rounded-lg"
          onClick={() => navigate("new")}
          text="Add new product"
        />
      </div>
      <Table
        {...{
          data: products,
          columns,
        }}
      />
    </div>
  );
};

export default MenuProduct;
