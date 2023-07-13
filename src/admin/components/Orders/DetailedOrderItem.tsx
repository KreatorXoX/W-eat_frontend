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
      <ul className="list-disc text-gray-500 dark:text-gray-400">
        {extras.map((extra) => (
          <DetailedExtraItem
            key={extra._id}
            name={extra.name}
            price={extra.price}
          />
        ))}
      </ul>
      {note && (
        <p className="ml-2 text-base">
          Product Note : <span className="italic text-red-500">{note}</span>
        </p>
      )}
    </div>
  );
};

export default DetailedOrderItem;
