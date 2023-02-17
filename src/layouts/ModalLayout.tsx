import { Outlet, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/themeStore'
import Backdrop from '../shared/components/UI-Elements/Backdrop'

type Props = {}

const ModalLayout = (props: Props) => {
  const dark = useTheme(state => state.dark)
  const navigate = useNavigate()
  return (
    <>
      <Backdrop onClick={() => navigate(-1)} />
      <div
        className={`${
          dark ? 'bg-gray-600' : 'bg-slate-200'
        }  lg:bg-gray-600/10 fixed right-0 top-0 z-10 w-full h-full overflow-hidden
        lg:flex lg:justify-center lg:items-center `}
      >
        <div
          className={`${
            dark ? 'bg-gray-600' : 'bg-slate-200'
          }  h-full w-full lg:h-[30rem] lg:w-[40rem] rounded-xl`}
        >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ModalLayout
