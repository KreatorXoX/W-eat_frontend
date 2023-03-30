import React from 'react'

interface Props {}

const OrderHistory = (props: Props) => {
  return (
    <div className='h-full flex flex-col justify-center items-center px-10'>
      <h2 className='mt-10 font-semibold text-2xl text-orange-600'>
        Order History
      </h2>

      <div className='w-full mt-5 max-w-[60rem] flex justify-end gap-5 pr-5 text-sm font-medium text-gray-700'>
        <h1>All</h1>
        <h1>Delivered</h1>
        <h1>Canceled</h1>
      </div>
      <div className='w-full rounded-lg bg-blue-400'>
        <table className='mt-3 w-full max-w-[60rem] shadow-lg'>
          <thead className='border-b-2 border-blue-500 bg-gray-200 text-gray-800'>
            <tr>
              <th className='w-40 p-4 text-sm font-semibold tracking-wider border-r-orange-300 border-r'>
                Order Id
              </th>
              <th className='w-80 p-4 text-sm font-semibold tracking-wider border-r-orange-300 border-r'>
                Order Date
              </th>
              <th className='w-10 p-4 text-sm font-semibold tracking-wider border-r-orange-300 border-r'>
                Price
              </th>
              <th className=' w-20 p-4 text-sm font-semibold tracking-wider'>
                Status
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-orange-300'>
            <tr className='even:bg-slate-200 odd:bg-slate-300'>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300'>
                idjsai213
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300'>
                04/01/2016
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300 text-center'>
                $12.50
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium text-center'>
                <span className='bg-green-200/60 text-green-700 uppercase rounded p-2'>
                  {/* check status and colorize accordingly */}
                  delivered
                </span>
              </td>
            </tr>
            <tr className='even:bg-slate-200 odd:bg-slate-300'>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300'>
                adfdh124
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300'>
                03/01/2016
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300 text-center'>
                $24.00
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium text-center'>
                <span className='bg-green-200/60 text-green-700 uppercase rounded p-2'>
                  {/* check status and colorize accordingly */}
                  delivered
                </span>
              </td>
            </tr>
            <tr className='even:bg-slate-200 odd:bg-slate-300'>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300'>
                sca325dcsa
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300'>
                13/01/2016
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300 text-center'>
                $14.00
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium text-center'>
                <span className='bg-red-200/60 text-red-700 uppercase rounded p-2'>
                  {/* check status and colorize accordingly */}
                  canceled
                </span>
              </td>
            </tr>
            <tr className='even:bg-slate-200 odd:bg-slate-300'>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300'>
                fdsf755xx3
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300 '>
                23/01/2016
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium border-r border-r-orange-300 text-center'>
                $41.00
              </td>
              <td className='text-sm p-4 text-gray-700 font-medium  text-center'>
                <span className='bg-red-200/60 text-red-700 uppercase rounded p-2'>
                  {/* check status and colorize accordingly */}
                  canceled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderHistory
