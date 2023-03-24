import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/themeStore'

type Props = {}

const ProductLayout = (props: Props) => {
  const navigate = useNavigate()
  const dark = useTheme(state => state.dark)
  const location = useLocation().pathname

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      <div
        className={`${
          dark ? 'bg-gray-800' : 'bg-pink-500'
        }  lg:bg-zinc-700/80 fixed right-0 top-0 w-full h-full
        lg:flex lg:justify-center lg:items-center`}
      >
        <div
          className={`${
            dark ? 'bg-gray-800' : 'bg-slate-50'
          }  h-full w-full lg:h-fit lg:py-5 lg:w-[40rem] rounded-xl
          absolute z-20
      top-0 bottom-0 right-0 left-0 m-auto
          `}
        >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ProductLayout
