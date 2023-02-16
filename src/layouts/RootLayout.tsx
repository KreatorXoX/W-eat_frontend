import { Outlet } from 'react-router-dom'
import Basket from '../components/Basket'
import MainNavigation from '../shared/components/Navigation/MainNavigation'
import { useTheme } from '../context/themeStore'

type Props = {}

const RootLayout = (props: Props) => {
  const dark = useTheme(state => state.dark)
  return (
    <main className={`h-screen ${dark ? 'dark bg-gray-600' : 'bg-slate-100'}`}>
      <MainNavigation />
      <div className='h-full dark:bg-gray-600 bg-slate-100 dark:text-slate-200 text-gray-700 w-full max-w-[100rem] mx-auto grid grid-cols-12'>
        <div className='col-span-full lg:col-span-9 flex justify-center items-center'>
          <Outlet />
        </div>
        <div
          className={`col-span-3 hidden lg:inline-block ${
            dark ? 'border-l' : ''
          } border-l-gray-500/50`}
        >
          <Basket />
        </div>
      </div>
    </main>
  )
}

export default RootLayout
