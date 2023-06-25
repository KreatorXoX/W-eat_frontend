import OrderCard from "../../components/Orders/OrderCard";
import RestaurantServices from "../../../api/services/restaurant.service";
interface Props {}

const AdminDashboard = (props: Props) => {
  const { data: revenue } = RestaurantServices.useRevenue();

  return (
    <div className="mx-auto grid h-full max-w-4xl grid-cols-1 gap-4 overflow-auto p-5 px-20 md:grid-cols-2 lg:gap-10">
      <OrderCard name="Total Orders" value={revenue?.totalOrders} />
      <OrderCard
        name="Total Earned"
        value={`${
          revenue?.totalEarned
            ? `€ ${revenue?.totalEarned?.toFixed(2)}`
            : "None"
        }`}
      />
      <OrderCard name="Orders Completed" value={revenue?.ordersCompleted} />
      <OrderCard name="Orders Canceled" value={revenue?.ordersCanceled} />
    </div>
  );
};

export default AdminDashboard;
