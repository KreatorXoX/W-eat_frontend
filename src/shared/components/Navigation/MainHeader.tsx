import { ReactNode } from 'react'

type Props = { children?: ReactNode }

const MainHeader = (props: Props) => {
  return (
    <header className='w-full bg-slate-100 dark:bg-gray-900 flex items-center justify-between p-4 px-6 border-b dark:border-gray-600 '>
      {props.children}
    </header>
  )
}

export default MainHeader
