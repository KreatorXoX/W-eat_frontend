import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import Filter from "./Filter";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

function Table<T extends object>({ data, columns }: ReactTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="h-full w-full max-w-[60rem] overflow-auto text-xs sm:text-sm">
      <table className="mt-3 w-full table-auto rounded-lg bg-gray-200 text-center shadow-lg sm:border-separate sm:border-spacing-1">
        <thead className="bg-gray-800 text-gray-100 sm:text-base">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={`p-1 font-bold tracking-wider sm:rounded-lg ${
                      header.id === "id" || header.id === "name"
                        ? "w-28 sm:w-48"
                        : /date/i.test(header.id)
                        ? ""
                        : "sm:w-20"
                    }
                    
                    ${header.id === "email" ? "hidden md:table-cell" : ""}
                    ${header.id === "tag" ? "hidden md:table-cell" : ""}
                    ${header.id === "category" ? "hidden md:table-cell" : ""}
                    `}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {(header.column.getCanFilter() &&
                          header.column.id === "id") ||
                        header.column.id === "name" ? (
                          <div className="flex w-full justify-center text-xs font-normal">
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="odd:bg-slate-300 even:bg-slate-100">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={`p-2 font-medium text-gray-700 ${
                        cell.getValue() === "delivered"
                          ? "bg-green-200/60 uppercase text-green-700"
                          : cell.getValue() === "canceled"
                          ? "bg-red-200/60 uppercase text-red-700"
                          : ""
                      }
                      
                      ${
                        cell.getValue() === "verified"
                          ? "bg-green-200/60 uppercase text-green-700"
                          : cell.getValue() === "pending"
                          ? "bg-yellow-200/60 uppercase text-yellow-700"
                          : cell.getValue() === "suspended"
                          ? "bg-gray-200/60 uppercase text-gray-400"
                          : ""
                      }
                      ${
                        cell.column.id === "email" ? "hidden md:table-cell" : ""
                      }
                      ${cell.column.id === "tag" ? "hidden md:table-cell" : ""}
                      ${
                        cell.column.id === "category"
                          ? "hidden md:table-cell"
                          : ""
                      }
                      `}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 w-full" />
      <div className="mx-auto flex w-fit items-center gap-2">
        <button
          className="rounded border p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="rounded border p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="rounded border p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="rounded border p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-8 rounded border p-1"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Table;
