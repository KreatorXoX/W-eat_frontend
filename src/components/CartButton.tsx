import React from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../context/shoppingCartStore'
type Props = {}

const CartButton = (props: Props) => {
  const getCartTotal = useShoppingCart(state => state.getCartTotal)
  const navigate = useNavigate()
  return (
    <div
      className='h-14
    flex items-center justify-center
    '
    >
      <button
        onClick={() => navigate('/cart')}
        className='bg-orange-600 rounded-full py-2 my-2
      text-lg text-slate-100 font-semibold w-full
      '
      >
        <span className='flex items-center justify-center gap-2'>
          <BsFillBasket2Fill className='inline' />
          <span>Basket</span>
          <span className=' tracking-wide'>
            (€ {getCartTotal().toFixed(2)})
          </span>
        </span>
      </button>
    </div>
  )
}

export default CartButton
