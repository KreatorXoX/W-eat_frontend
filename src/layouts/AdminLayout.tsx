import { Outlet, NavLink } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { FiSettings, FiUsers } from 'react-icons/fi'
import { IoRestaurantOutline } from 'react-icons/io5'
import { MdDeliveryDining, MdSettingsApplications } from 'react-icons/md'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <main className='h-screen flex lg:flex-row flex-col mx-auto'>
      <aside className='w-full lg:w-[14rem] bg-neutral-200 rounded-lg text-left '>
        <nav className='sticky top-0 rounded-xl w-full lg:pl-6 lg:mt-10'>
          <ul
            className='flex flex-row justify-evenly lg:flex-col overflow-hidden lg:gap-10 py-5
          font-semibold text-lg text-blue-800 transition-all delay-150 duration-500
          '
          >
            <li>
              <NavLink
                to='/admin'
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-2 decoration-1 text-blue-600'
                    : 'hover:text-blue-600'
                }
                end
              >
                <p className='flex flex-col text-sm lg:text-lg lg:flex-row items-center lg:gap-3'>
                  <GoHome className='inline text-xl' />
                  <span>Home</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-2 decoration-1  text-blue-600'
                    : 'hover:text-blue-600'
                }
                to='orders'
              >
                <p className='flex flex-col text-sm lg:text-lg lg:flex-row items-center lg:gap-3'>
                  <MdDeliveryDining className='inline text-xl' />
                  <span>Orders</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-2 decoration-1  text-blue-600'
                    : 'hover:text-blue-600'
                }
                to='customers'
              >
                <p className='flex flex-col text-sm lg:text-lg lg:flex-row items-center lg:gap-3'>
                  <FiUsers className='inline text-xl' />
                  <span>Customers</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-2 decoration-1  text-blue-600'
                    : 'hover:text-blue-600'
                }
                to='menu/categories'
              >
                <p className='flex flex-col text-sm lg:text-lg lg:flex-row items-center lg:gap-3'>
                  <IoRestaurantOutline className='inline text-xl' />
                  <span>Menu</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-2 decoration-1  text-blue-600'
                    : 'hover:text-blue-600'
                }
                to='restaurant-settings'
              >
                <p className='flex flex-col text-sm lg:text-lg lg:flex-row items-center lg:gap-3'>
                  <FiSettings className='inline text-xl' />
                  <span>Settings</span>
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='w-full h-full lg:w-[calc(100vw-14rem)] overflow-y-auto'>
        <Outlet />
      </div>
    </main>
  )
}

export default AdminLayout
