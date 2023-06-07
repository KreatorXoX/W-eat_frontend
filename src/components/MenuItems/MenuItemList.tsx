import MenuItem from "./MenuItem";

import { menu } from "../../utils/data";
type Props = {};

function MenuItemList({}: Props) {
  const popularProducts = menu.flatMap(({ products }) =>
    products.filter((product) => product.tag === "popular")
  );

  return (
    <>
      <div
        id="popular"
        className="mx-auto flex w-full max-w-4xl flex-col gap-5 p-5"
      >
        <h2 className="pt-2 text-base font-bold uppercase lg:text-lg">
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
          className="mx-auto flex w-full max-w-4xl flex-col gap-5 p-5"
        >
          <h2 className="pt-2 text-base font-bold uppercase lg:text-lg">
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
