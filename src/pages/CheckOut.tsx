import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/cartStore'
type Props = {}

const CheckOut = (props: Props) => {
  const cartItems = useCart(state => state.items)
  const navigate = useNavigate()

  useEffect(() => {
    if (cartItems?.length === 0) navigate('/')
  }, [])
  return (
    <div className='h-screen w-full'>
      <section
        id='checkout'
        className='h-full w-full flex items-center justify-center'
      >
        Checkout Page
      </section>
    </div>
  )
}

export default CheckOut
