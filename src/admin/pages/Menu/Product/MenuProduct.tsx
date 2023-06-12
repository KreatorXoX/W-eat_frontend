import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import Table from "../../../../shared/components/Table/Table";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { useNavigate } from "react-router-dom";
import MenuServices from "../../../api/services/menu.service";
type Props = {};

const MenuProduct = (props: Props) => {
  const { data: products } = MenuServices.useProducts();
  const navigate = useNavigate();

  const columns = useMemo<ColumnDef<IProduct>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Price",
        accessorKey: "price",
        cell: ({ row }) => `$ ${row.original.sizes[0].price.toFixed(2)}`,
      },
      {
        header: "Category",
        accessorKey: "category.name",
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
              onClick={() => navigate(`edit/${row.original._id}`)}
            />

            <GenericButton
              classes="rounded-lg"
              text="Delete"
              color="red"
              onClick={() => console.log(row.original._id + "deleted")}
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
          classes="rounded-lg"
          onClick={() => navigate("new")}
          text="Add new product"
        />
      </div>
      {products ? (
        <Table
          {...{
            data: products,
            columns,
          }}
        />
      ) : (
        <p>No product created yet</p>
      )}
    </div>
  );
};

export default MenuProduct;
