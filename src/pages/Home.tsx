type Props = {}
import { Link } from 'react-router-dom'
import CartButton from '../components/CartButton'
import { useCart } from '../context/cartStore'
const Home = (props: Props) => {
  const addToCart = useCart(state => state.addItems)
  return (
    <div className='h-screen w-full'>
      <section id='welcome' className='h-full dark:bg-gray-600'>
        page 1<button onClick={() => addToCart('item')}>Add</button>
      </section>
      <section id='items' className=' h-full dark:bg-gray-600'>
        page 2<button onClick={() => addToCart('item')}>Add</button>
        <Link to='/nutritions' className='text-xl ml-10'>
          i
        </Link>
      </section>
    </div>
  )
}

export default Home
