import { Outlet, NavLink } from 'react-router-dom'

type Props = {}

const OrdersLayout = (props: Props) => {
  return (
    <div className='mt-10'>
      <nav>
        <ul className='flex flex-row justify-center gap-14 text-gray-700 font-semibold'>
          <li>
            <NavLink
              to='/admin/orders'
              end
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-2 decoration-1 decoration-wavy text-purple-600 lg:text-xl'
                  : 'hover:text-purple-600 lg:text-xl'
              }
            >
              Active Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='order-history'
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-2 decoration-1 decoration-wavy text-purple-600 lg:text-xl'
                  : 'hover:text-purple-600 lg:text-xl'
              }
            >
              Order History
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default OrdersLayout
