type ExtraItem = {
  id: string;
  name: string;
  price: number;
};
type Extra = {
  id: string;
  name: string;
  paid: boolean;
  extraItems: ExtraItem[];
};

type Price = {
  size: string;
  price: number;
};
type Item = {
  id: string;
  name: string;
  description: string;
  ingridients: string;
  sizes: Price[];
  alergens: string[];
  category: string;
  tag?: string;
};

type Category = {
  id: string;
  name: string;
  products: Item[];
  extras: Extra[];
};
type Menu = Category[];

type OptionSelect = {
  value: string | number;
  label: string;
};

type Order = {
  id: string;
  orderDate: string;
  price: number;
};

type OrderHistory = {
  id: string;
  orderDate: string;
  price: number;
  status: "delivered" | "canceled";
};

type Customer = {
  id: string;
  name: string;
  email: string;
  status: "verified" | "pending" | "suspended";
};
