import { useState } from "react";
import EditRestaurant from "../../components/Restaurant/EditRestaurant";
import NewRestaurant from "../../components/Restaurant/NewRestaurant";
import RestaurantServices from "../../../api/services/restaurant.service";
type Props = {};

const Restaurant = (props: Props) => {
  const { data: restaurant } = RestaurantServices.useRestaurant();

  return <div>{restaurant ? <EditRestaurant /> : <NewRestaurant />}</div>;
};

export default Restaurant;
