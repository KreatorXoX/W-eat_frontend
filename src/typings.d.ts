type Item = {
  id: string;
  title: string;
  description: string;
  ingridients: string;
  price: number;
  alergens: string[];
  category: string;
};
type GroupedItems = {
  [key: string]: Item[];
};
