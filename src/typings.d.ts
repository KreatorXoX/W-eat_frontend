type Item = {
  id: string;
  title: string;
  description: string;
  price: number;
  alergens: string;
  category: string;
};
type GroupedItems = {
  [key: string]: Item[];
};
