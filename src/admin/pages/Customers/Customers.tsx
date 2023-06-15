import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import Table from "../../../shared/components/Table/Table";
import { customerList } from "../../../utils/table/customerTable";
import GenericButton from "../../../shared/components/UI-Elements/GenericButton";
import UserServices from "../../api/services/user.service";
interface Props {}

const Customers = (props: Props) => {
  const { data: users } = UserServices.useUsers();
  const { mutate: updateUserStatus } = UserServices.useUpdateUserStatus();
  const { mutate: deleteUser } = UserServices.useDeleteUser();

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
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
        accessorKey: "isSuspended",
        cell: ({ row }) => (row.original.isSuspended ? "Suspended" : "Active"),
      },
      {
        header: "Action",
        cell: ({ row }) => (
          <div className="flex justify-evenly">
            <GenericButton
              classes="rounded-lg"
              text="Del"
              color="red"
              onClick={() => deleteUser(row.original._id)}
            />
            <GenericButton
              classes="rounded-lg"
              text="Sus"
              color="gray"
              onClick={() =>
                updateUserStatus({ suspend: "true", id: row.original._id })
              }
            />
            <GenericButton
              classes="rounded-lg"
              text="Act"
              onClick={() =>
                updateUserStatus({ suspend: "false", id: row.original._id })
              }
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
      {users ? (
        <Table
          {...{
            data: users,
            columns,
          }}
        />
      ) : (
        <p>No user is registered yet</p>
      )}
    </div>
  );
};

export default Customers;
