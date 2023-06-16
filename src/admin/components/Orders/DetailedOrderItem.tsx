import React from "react";
import DetailedExtraItem from "./DetailedExtraItem";

const DetailedOrderItem = ({
  name,
  quantity,
  size,
  sizes,
  extras,
  note,
}: {
  name: string;
  quantity: number;
  size: any;
  sizes: any;
  extras: IExtraItem[];
  note: string | undefined;
}) => {
  const productPrice = sizes.find((price: any) => price.size === size);

  return (
    <div>
      <div className="flex w-full items-start justify-between">
        <span>
          {name} x{quantity} - ({size})
        </span>
        <span>$ {productPrice?.price.toFixed(2)}</span>
      </div>
      {/* show the extras */}
      <ul className="list-disc text-sm text-gray-500">
        {extras.map((extra) => (
          <DetailedExtraItem
            key={extra._id}
            name={extra.name}
            price={extra.price}
          />
        ))}
      </ul>
      <p className="border-b font-bold italic text-red-500">{note}</p>
    </div>
  );
};

export default DetailedOrderItem;
