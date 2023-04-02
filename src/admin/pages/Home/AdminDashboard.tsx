import OrderCard from "../../components/Orders/OrderCard";

interface Props {}

const AdminDashboard = (props: Props) => {
  return (
    <div className="h-full overflow-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-5 max-w-4xl lg:gap-10 mx-auto px-20">
      <OrderCard title="Total Orders" value={21} />
      <OrderCard title="Total Earned" value={`€ 521.00`} />
      <OrderCard title="Orders Completed" value={19} />
      <OrderCard title="Orders Canceled" value={2} />
    </div>
  );
};

export default AdminDashboard;
