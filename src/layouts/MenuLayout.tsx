import { Outlet, NavLink } from "react-router-dom";

type Props = {};

const MenuLayout = (props: Props) => {
  return (
    <div className="mt-5 lg:mt-10">
      <nav>
        <ul className="mx-auto flex max-w-[60rem] flex-row justify-evenly text-sm font-semibold text-gray-700">
          <li>
            <NavLink
              to="categories"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline decoration-1 underline-offset-2 lg:text-xl "
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
                  ? "text-orange-600 underline decoration-1  underline-offset-2 lg:text-xl"
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
                  ? "text-orange-600 underline decoration-1  underline-offset-2 lg:text-xl"
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
                  ? "text-orange-600 underline decoration-1  underline-offset-2 lg:text-xl"
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
