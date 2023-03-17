import React from "react";
import MenuItem from "./MenuItem";
import { useCartStore } from "../../context/cartStore";
import { items } from "../../shared/utils/data";
type Props = {};

function MenuItemList({}: Props) {
  const cartItems = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.totalPrice);

  const itemsByCategory = items.reduce(
    (result: GroupedItems, item: Item) => ({
      ...result,
      [item.category]: [...(result[item.category] || []), item],
    }),
    {}
  );

  return (
    <div>
      {Object.keys(itemsByCategory).map((category) => (
        <div
          id={`${category}`}
          key={category}
          className="p-5 w-full max-w-4xl mx-auto flex flex-col gap-5"
        >
          <h2 className="font-bold text-base lg:text-lg uppercase pt-2">
            {category}
          </h2>
          {itemsByCategory[category].map((item: Item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MenuItemList;
