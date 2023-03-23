import { AiOutlineClose } from 'react-icons/ai'
import { BiHome, BiPowerOff } from 'react-icons/bi'
import { BsBag, BsHeart } from 'react-icons/bs'
import { useNavigate, useLocation, Link } from 'react-router-dom'

interface Props {}

const Account = (props: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className='dark:text-slate-100 text-gray-700 px-4 overflow-y-hidden space-y-8'>
      <div className='space-y-2'>
        <div className='flex flex-row justify-between mt-4 items-center '>
          <h1 className='font-bold  text-xl'>
            My account / Account name if signed in
          </h1>
          <AiOutlineClose
            onClick={() =>
              navigate(
                `${location.pathname.includes('checkout') ? '/checkout' : '/'}`
              )
            }
            className='text-2xl cursor-pointer'
          />
        </div>
        <div>
          <Link
            to='personal-info'
            className='underline hover:no-underline text-sm'
          >
            View personal information
          </Link>
        </div>
      </div>
      <div className='flex flex-row gap-4 justify-evenly items-center w-full text-lg font-semibold'>
        <button
          onClick={() => navigate('login')}
          className='dark:bg-slate-400 bg-slate-200 auth--button hover:bg-slate-300 transition-colors duration-200
          dark:hover:bg-slate-500
          '
        >
          Sign in
        </button>
        <button
          onClick={() => navigate('register')}
          className='bg-orange-500 hover:bg-orange-600 auth--button text-slate-100 transition-colors duration-200'
        >
          Create Account
        </button>
      </div>
      <div className='px-2 flex flex-col gap-5'>
        <div className='cursor-pointer flex justify-start items-center gap-6'>
          <BsBag className='text-2xl inline' />
          <Link to='orders' className='dark:text-slate-200 text-gray-500'>
            Orders
          </Link>
        </div>
        <div className='cursor-pointer flex justify-start items-center gap-6'>
          <BsHeart className='text-2xl inline' />
          <Link to='favourites' className='dark:text-slate-200 text-gray-500'>
            Favorites
          </Link>
        </div>
        <div className='cursor-pointer flex justify-start items-center gap-6'>
          <BiHome className='text-2xl inline' />
          <Link to='addresses' className='dark:text-slate-200 text-gray-500'>
            Address
          </Link>
        </div>
        <div className='cursor-pointer flex justify-start items-center gap-6 border-t pt-3'>
          <BiPowerOff className='text-2xl inline' />
          <span className='dark:text-slate-200 text-gray-500'>Sign out</span>
        </div>
      </div>
    </div>
  )
}

export default Account
