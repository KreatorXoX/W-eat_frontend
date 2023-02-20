import React from 'react'
import { useCart } from '../context/cartStore'
type Props = {}

const Cart = (props: Props) => {
  const cartItems = useCart(state => state.items)
  return (
    <div className='h-screen text-gray-800 dark:text-slate-100 space-y-28 flex flex-col items-center z-20 overflow-hidden'>
      <h2 className=' font-bold text-2xl mt-4'>Basket</h2>
      <div className='flex flex-col justify-center items-center text-4xl'>
        {cartItems?.length > 0 && (
          cartItems.map((item, idx) => <p key={idx}>{item}</p>)
        )
        }
      </div>
    </div>
  )
}

export default Cart
