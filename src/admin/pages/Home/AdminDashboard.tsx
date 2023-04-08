import OrderCard from "../../components/Orders/OrderCard";

interface Props {}

const AdminDashboard = (props: Props) => {
  return (
    <div className="mx-auto grid h-full max-w-4xl grid-cols-1 gap-4 overflow-auto p-5 px-20 md:grid-cols-2 lg:gap-10">
      <OrderCard name="Total Orders" value={21} />
      <OrderCard name="Total Earned" value={`€ 521.00`} />
      <OrderCard name="Orders Completed" value={19} />
      <OrderCard name="Orders Canceled" value={2} />
    </div>
  );
};

export default AdminDashboard;
