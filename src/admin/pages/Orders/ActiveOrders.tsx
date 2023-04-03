import OrderItem from '../../components/Orders/OrderItem'

interface Props {}

const ActiveOrders = (props: Props) => {
  return (
    <div className='h-full flex justify-center items-center mt-10'>
      <div className='space-y-10 w-full flex flex-col justify-center items-center px-4'>
        <h2 className='text-2xl text-green-800 font-semibold'>Active Orders</h2>

        <ul className='w-full max-w-7xl mx-auto space-y-4'>
          <OrderItem
            order={{ orderId: '1', orderDate: '22/04/2023', price: 10 }}
          />
          <OrderItem
            order={{ orderId: '2', orderDate: '15/05/2023', price: 12 }}
          />
        </ul>
      </div>
    </div>
  )
}

export default ActiveOrders
