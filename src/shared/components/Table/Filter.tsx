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

  return typeof firstValue ===
    "number" ? //     className="w-24 border shadow rounded" //     placeholder={`Min`} //     } //       ]) //         old?.[1], //         e.target.value, //       column.setFilterValue((old: [number, number]) => [ //     onChange={(e) => //     value={(columnFilterValue as [number, number])?.[0] ?? ""} //     type="number" //   <input // <div className="flex space-x-2 text-gray-700">
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
      className="boroder-none w-full rounded p-1 text-gray-700 outline-none"
    />
  );
}
export default Filter;
