import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

import MainHeader from './MainHeader'

import ThemeButton from '../UI-Elements/ThemeButton'

const MainNavigation = () => {
  const navigate = useNavigate()
  const path = useLocation().pathname
  console.log(path)
  return (
    <>
      <MainHeader>
        <h1 className='text-xl font-serif dark:text-slate-200'>
          <Link to='/'>
            w/<span className='text-blue-400'>EAT</span>
          </Link>
        </h1>
        <h2 className='font-semibold text-xl text-violet-900 dark:text-slate-300'>
          Menu
        </h2>
        <div className='flex justify-center items-center gap-4'>
          <ThemeButton />
          <button
            className=' dark:text-white rounded-full dark:active:bg-gray-700 active:bg-gray-200 dark:hover:bg-gray-800 hover:bg-gray-300 duration-300 p-2'
            onClick={() => {
              navigate(
                `${
                  path === '/' ? '' : path === '/checkout' ? path : ''
                }/account`
              )
            }}
          >
            <AiOutlineMenu className='text-2xl ' />
          </button>
        </div>
      </MainHeader>
    </>
  )
}

export default MainNavigation
