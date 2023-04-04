import OrderCard from "../../components/Orders/OrderCard";

interface Props {}

const AdminDashboard = (props: Props) => {
  return (
    <div className="h-full overflow-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-5 max-w-4xl lg:gap-10 mx-auto px-20">
      <OrderCard name="Total Orders" value={21} />
      <OrderCard name="Total Earned" value={`€ 521.00`} />
      <OrderCard name="Orders Completed" value={19} />
      <OrderCard name="Orders Canceled" value={2} />
    </div>
  );
};

export default AdminDashboard;
