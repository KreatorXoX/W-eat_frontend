import React from "react";

interface Props {}

const OrderHistory = (props: Props) => {
  return (
    <div className="h-full flex flex-col justify-center items-center sm:px-10">
      <h2 className="mt-10 font-semibold text-2xl text-green-800">
        Order History
      </h2>

      <div className="w-full mt-5 max-w-[60rem] flex justify-end gap-5 pr-5 text-sm font-medium text-gray-700">
        <h1>All</h1>
        <h1>Delivered</h1>
        <h1>Canceled</h1>
      </div>
      <div className="w-full max-w-[60rem] overflow-auto text-xs sm:text-sm">
        <table className="mt-3 w-full bg-gray-200 rounded-lg shadow-lg text-center table-auto sm:border-separate sm:border-spacing-1">
          <thead className="bg-gray-800 text-gray-100 sm:text-base">
            <tr>
              <th className="font-extrabold sm:rounded-lg sm:w-52 p-4 tracking-wider ">
                Order Id
              </th>
              <th className="font-extrabold sm:rounded-lg p-4 tracking-wider ">
                Order Date
              </th>
              <th className="font-extrabold sm:rounded-lg sm:w-32 p-4 tracking-wider ">
                Price
              </th>
              <th className="font-extrabold sm:rounded-lg sm:w-32 p-4 tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="even:bg-slate-100 odd:bg-slate-300">
              <td className="line-clamp-1 p-4 text-gray-700 font-medium ">
                idjsai213
              </td>
              <td className=" p-4 text-gray-700 font-medium ">04/01/2016</td>
              <td className=" p-4 text-gray-700 font-medium  ">$12.50</td>
              <td className=" p-4 text-gray-700 font-medium ">
                <span className="bg-green-200/60 text-green-700 uppercase rounded p-2">
                  {/* check status and colorize accordingly */}
                  delivered
                </span>
              </td>
            </tr>
            <tr className="even:bg-slate-100 odd:bg-slate-300">
              <td className="line-clamp-1 p-4 text-gray-700 font-medium ">
                adfdh124
              </td>
              <td className=" p-4 text-gray-700 font-medium ">03/01/2016</td>
              <td className=" p-4 text-gray-700 font-medium  ">$24.00</td>
              <td className=" p-4 text-gray-700 font-medium ">
                <span className="bg-green-200/60 text-green-700 uppercase rounded p-2">
                  {/* check status and colorize accordingly */}
                  delivered
                </span>
              </td>
            </tr>
            <tr className="even:bg-slate-100 odd:bg-slate-300">
              <td className="line-clamp-1 p-4 text-gray-700 font-medium ">
                sca325dcsa
              </td>
              <td className=" p-4 text-gray-700 font-medium ">13/01/2016</td>
              <td className=" p-4 text-gray-700 font-medium  ">$14.00</td>
              <td className=" p-4 text-gray-700 font-medium ">
                <span className="bg-red-200/60 text-red-700 uppercase rounded p-2">
                  {/* check status and colorize accordingly */}
                  canceled
                </span>
              </td>
            </tr>
            <tr className="even:bg-slate-100 odd:bg-slate-300">
              <td className="line-clamp-1 p-4 text-gray-700 font-medium ">
                fdsf755xx3
              </td>
              <td className=" p-4 text-gray-700 font-medium  ">23/01/2016</td>
              <td className=" p-4 text-gray-700 font-medium  ">$41.00</td>
              <td className=" p-4 text-gray-700 font-medium  ">
                <span className="bg-red-200/60 text-red-700 uppercase rounded p-2">
                  {/* check status and colorize accordingly */}
                  canceled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
