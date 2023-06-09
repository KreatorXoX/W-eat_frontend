import React from "react";
import { formatDate } from "../../utils/formatDate";

type Props = {};

const OrderItem = ({ order }: { order: IOrder }) => {
  return (
    <li className="flex w-full items-center justify-between border-b border-red-300 p-1 text-xs dark:border-yellow-300 sm:text-base md:text-lg">
      <span className="truncate">{order._id}</span>
      <span className="truncate">{formatDate(order.createdAt)}</span>
      <span className="italic">${order.totalPrice?.toFixed(2)}</span>
    </li>
  );
};

export default OrderItem;
