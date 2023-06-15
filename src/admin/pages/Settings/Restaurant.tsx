import { useState } from "react";
import EditRestaurant from "./EditRestaurant";
import NewRestaurant from "./NewRestaurant";
import RestaurantServices from "../../api/services/restaurant.service";
type Props = {};

const Restaurant = (props: Props) => {
  const { data: restaurant } = RestaurantServices.useRestaurant();

  return <div>{restaurant ? <EditRestaurant /> : <NewRestaurant />}</div>;
};

export default Restaurant;
