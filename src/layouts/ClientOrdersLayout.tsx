import { RiArrowGoBackLine } from "react-icons/ri";
import {
  Outlet,
  NavLink,
  useOutletContext,
  Link,
  useLocation,
} from "react-router-dom";

type Props = {};

const ClientOrdersLayout = (props: Props) => {
  const ctx = useOutletContext();
  const path = useLocation().pathname;

  return (
    <div className="flex h-full flex-col justify-start space-y-10 px-1 text-gray-800 dark:text-slate-200 sm:px-5">
      <div className="mt-5 flex items-center gap-10 lg:mt-0">
        <Link to=".." className="text-3xl font-light text-orange-600">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="text-xl font-semibold ">Order History</h2>
      </div>
      <nav>
        <ul className="flex flex-row justify-center gap-5 font-semibold text-gray-700 md:gap-14">
          <li>
            <NavLink
              to={`${
                path.includes("checkout")
                  ? "/checkout/account/orders"
                  : "/account/orders"
              }`}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline decoration-1  underline-offset-2 lg:text-xl"
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

export default ClientOrdersLayout;
