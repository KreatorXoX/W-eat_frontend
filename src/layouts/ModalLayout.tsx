import { Outlet, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/themeStore'
import Backdrop from '../shared/components/UI-Elements/Backdrop'

type Props = {}

const ModalLayout = (props: Props) => {
  const dark = useTheme(state => state.dark)
  const navigate = useNavigate()
  return (
    <>
      <Backdrop onClick={() => navigate('/')} />
      <div
        className='absolute bg-slate-200 top-[20%] left-0 right-0 mx-auto
      h-[30rem] w-[40rem] z-20
      '
      >
        <Outlet />
      </div>
    </>
  )
}

export default ModalLayout
