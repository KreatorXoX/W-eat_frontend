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

type Item = {
  id: string;
  title: string;
  description: string;
  ingridients: string;
  price: number;
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
  value: string;
  label: string;
};

type Order = {
  orderId: string;
  orderDate: string;
  price: string;
};

type OrderHistory = {
  orderId: string;
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
