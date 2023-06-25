import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import Table from "../../../../shared/components/Table/Table";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { useNavigate } from "react-router-dom";
import MenuServices from "../../../../api/services/menu.service";

type Props = {};

const MenuProduct = (props: Props) => {
  const { data: products } = MenuServices.useProducts();
  const { mutate: deleteProduct } = MenuServices.useDeleteProduct();
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
        accessorKey: "category",
        cell: ({ row }) => row.original.category?.name,
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
              onClick={() => deleteProduct(row.original._id)}
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
        <p className="h-16 text-center text-xl">
          No product is created,{" "}
          <span className="italic text-red-500 underline">yet</span>
        </p>
      )}
    </div>
  );
};

export default MenuProduct;
