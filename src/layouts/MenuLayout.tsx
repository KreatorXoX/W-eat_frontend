import { Outlet, NavLink } from "react-router-dom";

type Props = {};

const MenuLayout = (props: Props) => {
  return (
    <div className="mt-5 lg:mt-10">
      <nav>
        <ul className="flex flex-row justify-evenly text-gray-700 font-semibold max-w-[60rem] mx-auto">
          <li>
            <NavLink
              to="categories"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-2 decoration-1 text-orange-600 lg:text-xl "
                  : "hover:text-orange-600 lg:text-xl"
              }
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-2 decoration-1  text-orange-600 lg:text-xl"
                  : "hover:text-orange-600 lg:text-xl"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="extra"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-2 decoration-1  text-orange-600 lg:text-xl"
                  : "hover:text-orange-600 lg:text-xl"
              }
            >
              Extras
            </NavLink>
          </li>
          <li>
            <NavLink
              to="extra-product"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-2 decoration-1  text-orange-600 lg:text-xl"
                  : "hover:text-orange-600 lg:text-xl"
              }
            >
              Extra Products
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MenuLayout;
