import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  NewRestaurantInput,
  UpdateRestaurantInput,
} from "../../utils/schema/restaurant.schema";
import axiosApi from "../axios";

// Restaurant
// Get Restaurant
const getRestaurant = async () => {
  const response = await axiosApi.get<IRestaurant>("/restaurant");
  return response.data;
};

const useRestaurant = () => {
  return useQuery(["restaurant"], {
    queryFn: () => getRestaurant(),
  });
};

// Get Revenue
const getRevenue = async () => {
  const response = await axiosApi.get<IRevenue>("/revenue");
  return response.data;
};

const useRevenue = () => {
  return useQuery(["revenue"], {
    queryFn: () => getRevenue(),
  });
};

// Create New Restaurant
const createRestaurant = async (data: NewRestaurantInput) => {
  const transformedData: NewRestaurantInput = {
    name: data.name,
    address: data.address,
    email: data.email || undefined,
    backgroundImage: data.backgroundImage || undefined,
    phoneNumber: data.phoneNumber || undefined,
    minDeliveryAmount: data.minDeliveryAmount,
    averageDeliveryTime: data.averageDeliveryTime,
    deliveryCost: data.deliveryCost,
    operationTime: {
      openingTime: data.operationTime.openingTime,
      closingTime: data.operationTime.closingTime,
    },
  };
  const response = await axiosApi.post("/restaurant", {
    ...transformedData,
  });
  return response.data;
};

const useCreateRestaurant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewRestaurantInput) => createRestaurant(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["restaurant"]);
    },
  });
};

// Update Restaurant
const updateRestaurant = async (data: UpdateRestaurantInput, id: string) => {
  const transformedData: UpdateRestaurantInput = {
    name: data.name,
    address: data.address,
    email: data.email || undefined,
    backgroundImage: data.backgroundImage || undefined,
    phoneNumber: data.phoneNumber || undefined,
    minDeliveryAmount: data.minDeliveryAmount,
    averageDeliveryTime: data.averageDeliveryTime,
    deliveryCost: data.deliveryCost,
    operationTime: {
      openingTime: data.operationTime?.openingTime,
      closingTime: data.operationTime?.closingTime,
    },
  };
  const response = await axiosApi.patch(`/restaurant/${id}`, {
    ...transformedData,
  });
  return response.data;
};

const useUpdateRestaurant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateRestaurantInput; id: string }) =>
      updateRestaurant(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["restaurant"]);
    },
  });
};

const RestaurantServices = {
  useRestaurant,
  useRevenue,
  useCreateRestaurant,
  useUpdateRestaurant,
};
export default RestaurantServices;
