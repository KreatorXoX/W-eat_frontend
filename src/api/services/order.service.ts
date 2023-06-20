import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axiosApi from "../axios";

// User
// Get Orders
const getAllOrders = async () => {
  const response = await axiosApi.get<IOrder[]>("/orders");
  return response.data;
};

const useOrders = () => {
  return useQuery(["orders"], {
    queryFn: () => getAllOrders(),
  });
};

// Get Orders Paginated
const getPaginatedOrders = async (page: number) => {
  const response = await axiosApi.get<IOrder[]>(`/orders?page=${page}`);
  return response.data;
};

const usePaginatedOrders = (page: number) => {
  return useQuery(["orders"], {
    queryFn: () => getPaginatedOrders(page),
    select: (data: IOrder[]) =>
      data.filter((order) => order.status === "pending"),
  });
};

// Get Order By Id
const getOrderById = async (id: string) => {
  const response = await axiosApi.get<IOrder>(`/orders/${id}`);
  return response.data;
};

const useOrderById = (id: string) => {
  return useQuery([`order-${id}`], {
    queryFn: () => getOrderById(id),
    enabled: !!id,
  });
};

// Get User Orders
const getOrdersByUser = async (id: string) => {
  const response = await axiosApi.get<{
    allOrders: IOrder[];
    favouriteOrders: IOrder[];
  }>(`/user/orders/${id}`);
  return response.data;
};

const useOrdersByUser = (id: string) => {
  return useQuery([`userOrders-${id}`], {
    queryFn: () => getOrdersByUser(id),
    staleTime: 100000,
    cacheTime: 100000,
    enabled: !!id,
  });
};

const OrderServices = {
  useOrders,
  usePaginatedOrders,
  useOrderById,
  useOrdersByUser,
};
export default OrderServices;
