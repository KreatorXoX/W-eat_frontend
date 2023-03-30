import MenuItem from "./MenuItem";

import { menu } from "../../shared/utils/data";
type Props = {};

function MenuItemList({}: Props) {
  const popularProducts = menu.flatMap(({ products }) =>
    products.filter((product) => product.tag === "popular")
  );

  return (
    <>
      <div
        id="popular"
        className="p-5 w-full max-w-4xl mx-auto flex flex-col gap-5"
      >
        <h2 className="font-bold text-base lg:text-lg uppercase pt-2">
          Popular
        </h2>
        {popularProducts.map((product) => (
          <MenuItem key={product.id} item={product} />
        ))}
      </div>

      {menu.map((category) => (
        <div
          id={`${category.name}`}
          key={category.id}
          className="p-5 w-full max-w-4xl mx-auto flex flex-col gap-5"
        >
          <h2 className="font-bold text-base lg:text-lg uppercase pt-2">
            {category.name}
          </h2>
          {category.products.map((item: Item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </div>
      ))}
    </>
  );
}

export default MenuItemList;
