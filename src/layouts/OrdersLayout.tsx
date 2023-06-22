import { Outlet, NavLink, useOutletContext } from "react-router-dom";

type Props = {};

const OrdersLayout = (props: Props) => {
  const ctx = useOutletContext();

  return (
    <div className="mt-5 lg:mt-10">
      <nav>
        <ul className="flex flex-row justify-center gap-14 font-semibold text-gray-700">
          <li>
            <NavLink
              to="/admin/orders"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline decoration-1 underline-offset-2 lg:text-xl "
                  : "hover:text-orange-600 lg:text-xl"
              }
            >
              Active Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="order-history"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline decoration-1  underline-offset-2 lg:text-xl"
                  : "hover:text-orange-600 lg:text-xl"
              }
            >
              Order History
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet context={ctx} />
    </div>
  );
};

export default OrdersLayout;
