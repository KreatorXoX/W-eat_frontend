import { menu } from "../data";

export function formatData() {
  return menu.map((category) => {
    return {
      id: category.id,
      name: category.name,
      products: category.products.map((pro) => {
        return { value: `${pro.id} - ${pro.price}`, label: pro.name };
      }),
      extraItems: category.extras.map((extra) => {
        return { value: extra.id, label: extra.name };
      }),
    };
  });
}
