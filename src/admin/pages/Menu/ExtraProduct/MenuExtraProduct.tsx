import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import Table from "../../../../shared/components/Table/Table";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { useNavigate } from "react-router-dom";
import MenuServices from "../../../../api/services/menu.service";

type Props = {};

const MenuExtraProduct = (props: Props) => {
  const { data: extraItems } = MenuServices.useExtraItems();
  const { mutate: deleteExtraItem } = MenuServices.useDeleteExtraItem();

  const navigate = useNavigate();
  const columns = useMemo<ColumnDef<IExtraItem>[]>(
    () => [
      // {
      //   header: "Id",
      //   accessorKey: "id",
      //   // cell: ({ row }) => {
      //   //   return (
      //   //     <Link
      //   //       to={`/admin/orders/${row.original.orderId}`}
      //   //       className="text-blue-600 underline hover:no-underline"
      //   //     >{`${row.original.orderId}`}</Link>
      //   //   );
      //   // },
      // },
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
        header: "Action",
        cell: ({ row }) => (
          <div className="flex justify-evenly">
            <GenericButton
              classes="rounded-lg"
              text="Edit"
              color="yellow"
              onClick={() => navigate(`edit/${row.original._id}`)}
            />

            <GenericButton
              classes="rounded-lg"
              text="Delete"
              color="red"
              onClick={() => deleteExtraItem(row.original._id)}
            />
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="flex h-full flex-col items-center py-5 sm:px-10">
      <div className="flex w-full max-w-[60rem] items-center justify-end py-5">
        <GenericButton
          onClick={() => navigate("new")}
          classes="rounded-lg"
          text="Add new extra product"
        />
      </div>
      {extraItems ? (
        <Table
          {...{
            data: extraItems,
            columns,
          }}
        />
      ) : (
        <p className="h-16 text-center text-xl">
          No extra product is created,{" "}
          <span className="italic text-red-500 underline">yet</span>
        </p>
      )}
    </div>
  );
};

export default MenuExtraProduct;
