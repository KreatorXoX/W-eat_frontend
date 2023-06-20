import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import Table from "../../../../shared/components/Table/Table";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import MenuServices from "../../../../api/services/menu.service";

type Props = {};

const MenuCategory = (props: Props) => {
  const { data: categories } = MenuServices.useCategories();
  const { mutate: deleteCategory } = MenuServices.useDeleteCategory();
  const navigate = useNavigate();
  const columns = useMemo<ColumnDef<ICategory>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
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
              onClick={() => deleteCategory(row.original._id)}
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
          text="Add new category"
        />
      </div>
      {categories ? (
        <Table
          {...{
            data: categories,
            columns,
          }}
        />
      ) : (
        <p>No category created yet</p>
      )}
    </div>
  );
};

export default MenuCategory;
