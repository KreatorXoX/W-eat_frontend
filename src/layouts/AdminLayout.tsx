import { Outlet, NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FiSettings, FiUsers } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdDeliveryDining, MdSettingsApplications } from "react-icons/md";
type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <main className="mx-auto flex h-screen flex-col lg:flex-row">
      <aside className="w-full rounded-lg bg-neutral-200 text-left lg:w-[14rem] ">
        <nav className="sticky top-0 w-full rounded-xl lg:mt-10 lg:pl-6">
          <ul
            className="flex flex-row justify-evenly overflow-hidden py-5 text-lg font-semibold
          text-blue-800 transition-all delay-150 duration-500 lg:flex-col lg:gap-10
          "
          >
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline decoration-1 underline-offset-2"
                    : "hover:text-blue-600"
                }
                end
              >
                <p className="flex flex-col items-center text-sm lg:flex-row lg:gap-3 lg:text-lg">
                  <GoHome className="inline text-xl" />
                  <span>Home</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline decoration-1  underline-offset-2"
                    : "hover:text-blue-600"
                }
                to="orders"
              >
                <p className="flex flex-col items-center text-sm lg:flex-row lg:gap-3 lg:text-lg">
                  <MdDeliveryDining className="inline text-xl" />
                  <span>Orders</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline decoration-1  underline-offset-2"
                    : "hover:text-blue-600"
                }
                to="customers"
              >
                <p className="flex flex-col items-center text-sm lg:flex-row lg:gap-3 lg:text-lg">
                  <FiUsers className="inline text-xl" />
                  <span>Customers</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline decoration-1  underline-offset-2"
                    : "hover:text-blue-600"
                }
                to="menu/categories"
              >
                <p className="flex flex-col items-center text-sm lg:flex-row lg:gap-3 lg:text-lg">
                  <IoRestaurantOutline className="inline text-xl" />
                  <span>Menu</span>
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline decoration-1  underline-offset-2"
                    : "hover:text-blue-600"
                }
                to="restaurant-settings"
              >
                <p className="flex flex-col items-center text-sm lg:flex-row lg:gap-3 lg:text-lg">
                  <FiSettings className="inline text-xl" />
                  <span>Settings</span>
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="h-full w-full overflow-y-auto lg:w-[calc(100vw-14rem)]">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
