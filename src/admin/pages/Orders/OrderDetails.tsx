import { useNavigate, useParams } from "react-router-dom";
import GenericButton from "../../../shared/components/UI-Elements/GenericButton";

import { formatDate } from "../../../utils/formatDate";
import DetailedOrderItem from "../../components/Orders/DetailedOrderItem";
import OrderServices from "../../../api/services/order.service";
type Props = {};

const OrderDetails = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: order } = OrderServices.useOrderById(id!);

  return (
    <div className="space-y-3 p-5 text-sm text-gray-700 lg:px-4 lg:py-0">
      <div>
        <div className="flex w-full items-start justify-between">
          <div className="mb-2 flex flex-col justify-center">
            <h4>{order?._id.slice(0, 7)}</h4>
            <h4>{formatDate(order?.createdAt)}</h4>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="font-semibold tracking-wider text-green-600 first-letter:uppercase">
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
            <h4 className="font-medium">Delivery Address</h4>
            <span className="ml-1 text-xs font-semibold text-gray-700">
              {order?.address}
            </span>
          </div>
          <div>
            <h4 className="font-medium">Payment Method</h4>
            <span className="ml-1 text-xs font-semibold text-green-700">
              {order?.paymentMethod}
            </span>
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
          <h4>Items Total</h4>
          <span className="ml-1 text-sm">$ {order?.totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <h4>Delivery Cost</h4>
          <span className="ml-1 text-sm">$ {order?.deliveryCost}</span>
        </div>
        <div className="flex justify-between">
          <h4>Cart Total</h4>
          <span className="ml-1 text-sm">$ {}</span>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <GenericButton
          classes="rounded-lg font-medium"
          text="Cancel"
          color="red"
        />
        <GenericButton classes="rounded-lg font-medium" text="Accept" />
      </div>
    </div>
  );
};

export default OrderDetails;
