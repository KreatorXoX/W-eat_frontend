import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axiosApi from "../axios";
import {
  NewRestaurantInput,
  UpdateRestaurantInput,
} from "../../../utils/schema/restaurant.schema";

// User
// Get Users
const getUsers = async () => {
  const response = await axiosApi.get<IUser[]>("/users");
  return response.data;
};

const useUsers = () => {
  return useQuery(["users"], {
    queryFn: () => getUsers(),
  });
};

// Update User Status
const updateUserStatus = async (suspend: string, id: string) => {
  const response = await axiosApi.patch(
    `/user/suspend/${id}?suspend=${suspend}`
  );
  return response.data;
};

const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ suspend, id }: { suspend: string; id: string }) =>
      updateUserStatus(suspend, id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

// Delete User
const deleteUser = async (id: string) => {
  const response = await axiosApi.delete(`/user/${id}`);
  return response.data;
};

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

const UserServices = {
  useUsers,
  useUpdateUserStatus,
  useDeleteUser,
};
export default UserServices;
