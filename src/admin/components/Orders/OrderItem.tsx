import React from 'react'

type Props = {
  order: Order
}

const OrderItem = ({ order }: Props) => {
  return (
    <div className='flex justify-between px-2 py-1 text-gray-700 text-sm lg:text-lg hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150
    rounded-md ring-2 ring-blue-400 
    '>
  <div onClick={()=>console.log('div clicked')} className='flex w-full pr-10 justify-between'>
      <div className='flex items-center flex-col justify-center space-y-2'>
        <h1 className='font-semibold'>Order Id</h1>
        <h2>{order.orderId}</h2>
      </div>
      <div className='flex items-center flex-col justify-center space-y-2'>
        <h1 className='font-semibold'>Order Date</h1>
        <h2>{order.orderDate}</h2>
      </div>
      <div className='flex items-center flex-col justify-center space-y-2'>
        <h1 className='font-semibold'>Price</h1>
        <h2>{order.price}</h2>
      </div>
      </div>
      <div className='flex items-center flex-col justify-center space-y-2 border-l border-l-[3px] border-blue-400 pl-2'>
        <h1 className='font-semibold'>Actions</h1>
        <button onClick={()=>console.log('button clicked')} className='text-xs bg-green-500 p-1 rounded text-slate-100'>
          Accept
        </button>
        <button onClick={()=>console.log('button clicked')} className='text-xs bg-red-500 p-1 rounded text-slate-100'>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default OrderItem
