import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import Table from "../../../../shared/components/Table/Table";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { useNavigate } from "react-router-dom";
import MenuServices from "../../../../api/services/menu.service";

type Props = {};

const MenuExtra = (props: Props) => {
  const { data: extras } = MenuServices.useExtras();
  const { mutate: deleteExtra } = MenuServices.useDeleteExtra();
  const navigate = useNavigate();
  const columns = useMemo<ColumnDef<IExtra>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Paid",
        accessorKey: "paid",
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
              onClick={() => deleteExtra(row.original._id)}
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
          text="Add new extra"
        />
      </div>
      {extras ? (
        <Table
          {...{
            data: extras,
            columns,
          }}
        />
      ) : (
        <p>No extras created yet</p>
      )}
    </div>
  );
};

export default MenuExtra;
