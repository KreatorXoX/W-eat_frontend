import { useNavigate } from 'react-router-dom'
import GenericButton from '../../../shared/components/UI-Elements/GenericButton'
type Props = {
  order: Order
}

const OrderItem = ({ order }: Props) => {
  const navigate = useNavigate()
  return (
    <div
      className='flex justify-between px-2 py-1 text-gray-700 text-sm md:text-base hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150
    rounded-md ring-2 ring-green-600 
    '
    >
      <div
        onClick={() => navigate(`/admin/orders/${order.orderId}`)}
        className='flex w-full pr-10 justify-between'
      >
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
          <h2>$ {order.price.toFixed(2)}</h2>
        </div>
      </div>
      <div className='flex items-center flex-col justify-center space-y-2 border-l-[2px] border-green-600 pl-2'>
        <h1 className='font-semibold'>Actions</h1>
        <div className='flex items-center flex-col md:flex-row justify-center gap-2'>
          <GenericButton
            text={'Accept'}
            onClick={() => console.log('order accepted')}
          />
          <GenericButton
            text={'Decline'}
            color='red'
            onClick={() => console.log('order cancelled')}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderItem
