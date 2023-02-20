import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/themeStore'
import Backdrop from '../shared/components/UI-Elements/Backdrop'
import { motion } from 'framer-motion'

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
      <Backdrop />
      <motion.div
        initial={{ opacity: 0, y: -400, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className={`${
          dark ? 'bg-gray-600' : 'bg-slate-200'
        }  lg:bg-gray-600/10 fixed right-0 top-0 w-full h-full overflow-hidden
        lg:flex lg:justify-center lg:items-center z-10 `}
      >
        <div
          className={`${
            dark ? 'bg-gray-600' : 'bg-slate-200'
          }  h-full w-full lg:h-[30rem] lg:w-[40rem] rounded-xl`}
        >
          <Outlet />
        </div>
      </motion.div>
    </>
  )
}

export default ModalLayout
