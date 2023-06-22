import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import OrderServices from "../../api/services/order.service";
import { formatDate } from "../../utils/formatDate";
import GenericButton from "../../shared/components/UI-Elements/GenericButton";
import DetailedOrderItem from "../../admin/components/Orders/DetailedOrderItem";
import { Status } from "../../utils/schema/order.schema";

type Props = {};

type adminCtx = {
  _id: string;
  isAdmin: boolean;
};

const OrderDetails = (props: Props) => {
  const ctx: adminCtx = useOutletContext();

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: order } = OrderServices.useOrderById(id!);
  const { mutate: updateOrder } = OrderServices.useUpdateOrder();

  return (
    <div className="space-y-3 p-5 text-sm text-gray-700 md:text-lg lg:px-4 lg:py-0">
      <div>
        <div className="flex w-full items-start justify-between">
          <div className="mb-2 flex flex-col justify-center">
            <h4>
              <span className="font-semibold">Order ID : </span> {order?._id}
            </h4>
            <h4 className="font-semibold">{formatDate(order?.createdAt)}</h4>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className=" font-bold tracking-wider text-green-600 first-letter:uppercase md:text-xl">
              {order?.status}
            </h4>
            <GenericButton
              classes="rounded-lg"
              text="&lt; &lt; Back"
              color="yellow"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <div>
            <h4 className="font-semibold">Delivery Address</h4>
            <span className="ml-2">{order?.address}</span>
          </div>
          <div>
            <h4 className="font-semibold">Payment Method</h4>
            <span className="ml-2 ">{order?.paymentMethod}</span>
          </div>
          <div>
            <h4 className="font-semibold">General Notes</h4>
            <span className="ml-2 text-red-500">{order?.note || " - "}</span>
          </div>
        </div>
      </div>

      <hr className="rounded border-t-2 border-t-gray-400" />

      <div className="max-h-[20rem] space-y-2 overflow-y-auto sm:max-h-[25rem]">
        {order?.orderItems.map((item, idx) => (
          <DetailedOrderItem
            key={item.product._id + "-" + idx}
            name={item.product.name}
            size={item.size}
            sizes={item.product.sizes}
            quantity={item.quantity}
            extras={item.extras}
            note={item.note}
          />
        ))}
      </div>

      <hr className="rounded border-t-2 border-t-gray-400" />

      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-between">
          <h4 className="font-semibold">Food Total</h4>
          <span className="ml-1">$ {order?.totalPrice?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <h4 className="font-semibold">Delivery Cost</h4>
          <span className="ml-1">$ {order?.deliveryCost?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <h4 className="font-semibold">Cart Total</h4>
          <span className="ml-1 font-semibold">
            ${" "}
            {order?.totalPrice &&
              order?.deliveryCost &&
              (order.totalPrice + order.deliveryCost).toFixed(2)}
          </span>
        </div>
      </div>
      {ctx && ctx.isAdmin && order?.status === "pending" && (
        <div className="flex justify-center gap-4">
          <GenericButton
            classes="rounded-lg font-medium"
            text="Decline"
            color="red"
            onClick={() =>
              updateOrder({
                data: { status: Status.ACCEPTED },
                id: order?._id!,
              })
            }
          />
          <GenericButton
            classes="rounded-lg font-medium"
            text="Accept"
            onClick={() =>
              updateOrder({
                data: { status: Status.CANCELED },
                id: order?._id!,
              })
            }
          />
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
