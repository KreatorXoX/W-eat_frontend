import React from "react";
import MenuItem from "./MenuItem";
import { useCart } from "../../context/cartStore";
type Props = {};

function MenuItemList({}: Props) {
  const items = [
    {
      id: "1",
      title: "item1",
      description: "Some information about the product you gonna eat",
      price: 12,
      alergens: "11",
      category: "category1",
    },
    {
      id: "2",
      title: "item2",
      description: "Some information about the product you gonna eat",
      price: 12,
      alergens: "12",
      category: "category2",
    },
    {
      id: "3",
      title: "item3",
      description: "Some information about the product you gonna eat",
      price: 12,
      alergens: "13",
      category: "category1",
    },
    {
      id: "4",
      title: "item4",
      description: "Some information about the product you gonna eat",
      price: 12,
      alergens: "14",
      category: "category3",
    },
  ];

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
          key={category}
          className="p-5 w-full max-w-4xl mx-auto flex flex-col gap-5"
        >
          <h2 className="font-bold text-xl uppercase">{category}</h2>
          {itemsByCategory[category].map((item: Item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              alergens={item.alergens}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MenuItemList;
