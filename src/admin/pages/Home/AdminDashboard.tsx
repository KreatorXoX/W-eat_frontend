import OrderCard from "../../components/Orders/OrderCard";
import RestaurantServices from "../../../api/services/restaurant.service";
interface Props {}

const AdminDashboard = (props: Props) => {
  const { data: revenue } = RestaurantServices.useRevenue();

  return (
    <div className="mx-auto grid h-full max-w-5xl grid-cols-1 gap-4 overflow-auto p-5 px-20 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
      <OrderCard name="Total Orders" value={revenue?.totalOrders} />
      <OrderCard
        name="Total Earned"
        value={`${
          revenue?.totalEarned
            ? `€ ${revenue?.totalEarned?.toFixed(2)}`
            : "None"
        }`}
      />
      <OrderCard
        name="Pending Orders"
        value={revenue?.ordersPending}
        where="orders"
      />
      <OrderCard
        name="Active Orders"
        value={revenue?.ordersActive}
        where="orders/active-orders"
      />
      <OrderCard
        name="Completed Orders"
        value={revenue?.ordersCompleted}
        where="orders/order-history"
      />
      <OrderCard name="Canceled Orders" value={revenue?.ordersCanceled} />
    </div>
  );
};

export default AdminDashboard;
