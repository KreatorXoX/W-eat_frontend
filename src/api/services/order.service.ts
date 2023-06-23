import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axiosApi from "../axios";
import { UpdateOrderInput } from "../../utils/schema/order.schema";

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

const usePaginatedPendingOrders = (page: number) => {
  return useQuery(["pending-orders"], {
    queryFn: () => getPaginatedOrders(page),
    select: (data: IOrder[]) =>
      data.filter((order) => order.status === "pending"),
  });
};
const usePaginatedActiveOrders = (page: number) => {
  return useQuery(["active-orders"], {
    queryFn: () => getPaginatedOrders(page),
    select: (data: IOrder[]) =>
      data.filter((order) => order.status === "accepted"),
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

// Update Order
type UpdateOrderInputApi = {
  status?: string;
  paymentStatus?: string;
  isFavorite?: boolean;
};
const updateOrder = async (data: UpdateOrderInput, id: string) => {
  const transformedData: UpdateOrderInputApi = {
    status: data.status,
    paymentStatus: data.paymentStatus,
    isFavorite: data.isFavorite,
  };
  const response = await axiosApi.patch(`/orders/${id}`, {
    ...data,
  });
  return response.data;
};

const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateOrderInput; id: string }) =>
      updateOrder(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
      queryClient.invalidateQueries(["active-orders"]);
      queryClient.invalidateQueries(["pending-orders"]);
    },
  });
};

const OrderServices = {
  useOrders,
  usePaginatedActiveOrders,
  usePaginatedPendingOrders,
  useOrderById,
  useOrdersByUser,
  useUpdateOrder,
};
export default OrderServices;
