import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axiosApi from "../axios";
import {
  NewRestaurantInput,
  UpdateRestaurantInput,
} from "../../../utils/schema/restaurant.schema";

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

// Get Orders
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

// // Update User Status
// const updateUserStatus = async (suspend: string, id: string) => {
//   const response = await axiosApi.patch(
//     `/user/suspend/${id}?suspend=${suspend}`
//   );
//   return response.data;
// };

// const useUpdateUserStatus = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ suspend, id }: { suspend: string; id: string }) =>
//       updateUserStatus(suspend, id),
//     onSuccess: (response: { _id: string }) => {
//       queryClient.invalidateQueries(["users"]);
//     },
//   });
// };

// // Delete User
// const deleteUser = async (id: string) => {
//   const response = await axiosApi.delete(`/user/${id}`);
//   return response.data;
// };

// const useDeleteUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (id: string) => deleteUser(id),
//     onSuccess: (response: { _id: string }) => {
//       queryClient.invalidateQueries(["users"]);
//     },
//   });
// };

const OrderServices = {
  useOrders,
  usePaginatedOrders,
  useOrderById,
};
export default OrderServices;
