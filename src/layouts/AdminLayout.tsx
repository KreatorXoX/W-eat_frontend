import { Outlet, Link } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <main className='h-screen flex sm:flex-row flex-col max-w-[120rem] mx-auto'>
      <aside className='w-full sm:w-[15rem] bg-neutral-200 rounded-lg text-center'>
        <div className='sticky top-0 rounded-xl w-full'>
          <ul
            className='flex flex-row justify-evenly sm:flex-col overflow-hidden sm:gap-10 py-10
          text-purple-800 font-semibold text-lg
          '
          >
            <li>
              <Link className='hover:text-purple-600' to='home'>
                <span className='fa fa-home mr-2'></span> Customers
              </Link>
            </li>
            <li>
              <Link className='hover:text-purple-600' to='home'>
                <span className='fa fa-home mr-2'></span> Products
              </Link>
            </li>
            <li>
              <Link className='hover:text-purple-600' to='home'>
                <span className='fa fa-home mr-2'></span> Orders
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className='w-full h-full sm:w-[calc(100vw-15rem)]'>
        <Outlet />
      </div>
    </main>
  )
}

export default AdminLayout
