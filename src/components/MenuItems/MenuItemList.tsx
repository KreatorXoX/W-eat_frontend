import MenuItem from "./MenuItem";

type Props = {
  popularProducts: IProduct[] | undefined;
  menu: ICategory[] | undefined;
};

function MenuItemList({ popularProducts, menu }: Props) {
  return (
    <>
      <div
        id="popular"
        className="mx-auto flex w-full max-w-4xl flex-col gap-5 p-5"
      >
        <h2 className="pt-2 text-base font-bold uppercase lg:text-lg">
          Popular
        </h2>
        {popularProducts?.map((product) => (
          <MenuItem key={product._id} product={product} />
        ))}
      </div>

      {menu?.map((category) => (
        <div
          id={`${category.name}`}
          key={category._id}
          className="mx-auto flex w-full max-w-4xl flex-col gap-5 p-5"
        >
          <h2 className="pt-2 text-base font-bold uppercase lg:text-lg">
            {category.name}
          </h2>
          {category.products.map((product: IProduct) => (
            <MenuItem key={product?._id} product={product} />
          ))}
        </div>
      ))}
    </>
  );
}

export default MenuItemList;
