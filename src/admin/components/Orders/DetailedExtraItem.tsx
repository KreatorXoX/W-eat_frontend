import React from "react";

type Props = {};

const DetailedExtraItem = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  return (
    <li className="ml-4">
      <div className="flex justify-between text-sm">
        <span>{name}</span>{" "}
        <span className="text-sm">$ {price.toFixed(2)}</span>
      </div>
    </li>
  );
};

export default DetailedExtraItem;
