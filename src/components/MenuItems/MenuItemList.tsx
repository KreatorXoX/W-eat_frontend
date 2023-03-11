import React from "react";
import MenuItem from "./MenuItem";
import { useCartStore } from "../../context/cartStore";

type Props = {};

function MenuItemList({}: Props) {
  const cartItems = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.totalPrice);

  const items = [
    {
      id: "1",
      title: "Spaghetti carbonara",
      description:
        "Spaghetti pasta that is tossed in a creamy sauce made with eggs, Parmesan cheese, and crispy pancetta or bacon.",
      ingridients: "Eggs, Parmesan cheese, bacon, black pepper, garlic",
      price: 13,
      alergens: ["Eggs", "Cheese", "Pork"],
      category: "popular",
    },
    {
      id: "2",
      title: "Chicken tikka masala",
      description:
        "Grilled chicken pieces that are served in a rich and creamy tomato-based curry sauce.",
      ingridients: "Tomatoes, onion, garlic, ginger",
      price: 15,
      alergens: ["Dairy", "Nuts"],
      category: "popular",
    },
    {
      id: "3",
      title: "Pad Thai",
      description:
        "Rice noodles that are stir-fried with shrimp, tofu, bean sprouts, scallions, and peanuts.",
      ingridients:
        "Shrimp, tofu, bean sprouts, scallions, peanuts, tamarind sauce, lime wedges.",
      price: 11,
      alergens: ["Peanuts", "Shellfish", "Soy"],
      category: "tai",
    },
    {
      id: "4",
      title: "Beef wellington",
      description:
        "Beef chuck that is braised in red wine and beef broth with onions, carrots, and herbs such as thyme and bay leaves.",
      ingridients: "Red wine, onions, carrots, garlic, butter",
      price: 8,
      alergens: ["Wheat", "Dairy"],
      category: "beef",
    },
    {
      id: "5",
      title: "Tom Yum Goong",
      description:
        "Rice noodles that are stir-fried with shrimp, tofu, bean sprouts, scallions, and peanuts.",
      ingridients:
        "Shrimp, tofu, bean sprouts, scallions, peanuts, tamarind sauce, lime wedges.",
      price: 11,
      alergens: ["Peanuts", "Shellfish", "Soy"],
      category: "tai",
    },
    {
      id: "6",
      title: "Beef bourguignon",
      description:
        "Beef chuck that is braised in red wine and beef broth with onions, carrots, and herbs such as thyme and bay leaves.",
      ingridients: "Red wine, onions, carrots, garlic, butter",
      price: 8,
      alergens: ["Wheat", "Dairy"],
      category: "beef",
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
