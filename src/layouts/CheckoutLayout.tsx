import { Outlet } from 'react-router-dom'
import Basket from '../components/Basket'
import MainNavigation from '../shared/components/Navigation/MainNavigation'
import { useTheme } from '../context/themeStore'
import CheckOut from '../pages/CheckOut'
type Props = {}

const CheckoutLayout = (props: Props) => {
  const dark = useTheme(state => state.dark)
  return (
    <main className={`h-screen ${dark ? 'dark bg-gray-600' : 'bg-slate-100'} `}>
      <MainNavigation />
      <div className='w-full dark:bg-gray-600 bg-slate-100 dark:text-slate-200 text-gray-700 flex flow-row'>
        <div className='w-full lg:w-[calc(100vw-21.5rem)] flex justify-center items-center'>
          <CheckOut />
        </div>
        <div className='hidden lg:inline-flex lg:w-[21.5rem]'>
          <Basket />
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default CheckoutLayout
