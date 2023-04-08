import { useState } from "react";
import EditRestaurant from "./EditRestaurant";
import NewRestaurant from "./NewRestaurant";
type Props = {};

const Restaurant = (props: Props) => {
  const [restaurant, setRestaurant] = useState<any>({});

  return <div>{restaurant ? <EditRestaurant /> : <NewRestaurant />}</div>;
};

export default Restaurant;
