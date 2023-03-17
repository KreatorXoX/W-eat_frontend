type ExtraItem = {
  id: string;
  name: string;
  price: number | null;
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
  extras: Extra[];
};
type GroupedItems = {
  [key: string]: Item[];
};
