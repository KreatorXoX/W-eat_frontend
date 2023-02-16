import { ReactNode } from 'react'

type Props = { children?: ReactNode }

const MainHeader = (props: Props) => {
  return (
    <header className='absolute w-screen left-0 right-0 mx-auto bg-slate-100 dark:bg-gray-600 max-w-7xl mx-auto flex items-center justify-between p-4 px-6'>
      {props.children}
    </header>
  )
}

export default MainHeader
