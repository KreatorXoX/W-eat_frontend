import { Column, Table } from "@tanstack/react-table";

function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? //     placeholder={`Min`} //     } //       ]) //         old?.[1], //         e.target.value, //       column.setFilterValue((old: [number, number]) => [ //     onChange={(e) => //     value={(columnFilterValue as [number, number])?.[0] ?? ""} //     type="number" //   <input // <div className="flex space-x-2 text-gray-700">
  //     className="w-24 border shadow rounded"
  //   />
  //   <input
  //     type="number"
  //     value={(columnFilterValue as [number, number])?.[1] ?? ""}
  //     onChange={(e) =>
  //       column.setFilterValue((old: [number, number]) => [
  //         old?.[0],
  //         e.target.value,
  //       ])
  //     }
  //     placeholder={`Max`}
  //     className="w-24 border shadow rounded"
  //   />
  // </div>
  null : (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-full boroder-none outline-none p-1 rounded text-gray-700"
    />
  );
}
export default Filter;
