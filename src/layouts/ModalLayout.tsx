import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/themeStore'

type Props = {}

const ModalLayout = (props: Props) => {
  const dark = useTheme(state => state.dark)

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
          dark ? 'bg-gray-800' : 'bg-slate-50'
        }  lg:bg-zinc-700/80 fixed right-0 top-0 w-full h-full
        lg:flex lg:justify-center lg:items-center z-10`}
      >
        <div
          className={`${
            dark ? 'bg-gray-800' : 'bg-slate-50'
          }  h-full w-full lg:h-fit lg:py-5 lg:w-[40rem] rounded-xl `}
        >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ModalLayout
