import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useOutletContext } from "react-router-dom";
import UserServices from "../api/services/user.service";
import OrderItem from "../components/Order/OrderItem";

interface Props {}

const Orders = (props: Props) => {
  const ctx: UserContext = useOutletContext();
  const { data: userOrders, isLoading } = UserServices.useUserOrders(ctx.id);
  return (
    <div className="h-full space-y-10 px-1 text-gray-800 dark:text-slate-200 sm:px-5 ">
      <div className="mt-5 flex items-center gap-10 lg:mt-0">
        <Link to=".." className="text-3xl font-light text-orange-600">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="text-xl font-semibold ">Order History</h2>
      </div>
      <div>
        <ul>
          {isLoading ? (
            <p>Loading</p>
          ) : userOrders && userOrders?.length > 0 ? (
            userOrders?.map((order) => (
              <OrderItem key={order._id} order={order} />
            ))
          ) : (
            <p className="text-xl">No previous orders available</p>
          )}
        </ul>
        <div className="mt-4 text-center">Pagination</div>
      </div>
    </div>
  );
};

export default Orders;
