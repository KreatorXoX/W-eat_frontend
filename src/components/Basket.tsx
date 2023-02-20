import { useNavigate,useLocation } from 'react-router-dom'
import { useCart } from '../context/cartStore'
import { TbDivide, TbPaperBag } from 'react-icons/tb'

type Props = {}

// there needs to be a fixed minimum delivery amount to disable/enable checkout button
// if minimum amount isnt reached, then show an simple information message.

const Basket = (props: Props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const cartItems = useCart(state => state.items)
  return (
    <div
      className='w-[22rem] bg-slate-100 dark:bg-gray-600 basket dark:border-l dark:border-l-slate-200/20 border-l-gray-500/20 border-l
     '
    >
      <div className='h-screen w-full text-gray-800 dark:text-slate-100 space-y-3 flex flex-col 
      px-2
      '>
        <h2 className='text-center font-bold text-2xl mt-4'>Basket</h2>
         
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => <div>
              <div>
                <span>
                  {/* show item amount */}
                </span>
                <p className='text-base ml-2' key={idx}>{item}</p>
                {/* item and price */}
              </div>
              <div>
                {/* add note and inc/dec item */}
              </div>
            
              <div>
                {/* hidden note when added inline note.  */}
              </div>
            
              <div>
                {/* subtotal - delivery cost - total */}
              </div>
            </div>)
          ) : (
       
        <div className='pt-28 flex flex-col justify-center items-center text-4xl w-full px-4'>
              <TbPaperBag />
              <p className='text-2xl font-bold mt-5 mb-2'>Fill your Bag</p>
              <span className='text-base'>Your bag is Empty</span>
       
          </div>
          )}
          {cartItems?.length > 0 && location?.pathname !== '/checkout' && <button
            onClick={() => navigate('/checkout')}
            className='bg-orange-600 rounded-full py-2
      text-xl text-slate-100 font-semibold w-full
      '
          >
            <p className='flex items-center justify-center space-x-2 text-lg font-bold'>
              <span>Checkout</span>
              <span className=' tracking-wide'>($ 60,00)</span>
            </p>
          </button>}
      </div>
    </div>
  )
}

export default Basket
