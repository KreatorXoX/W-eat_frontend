import { useAuthStore } from "../../context/useAuthStore";
import {
  UpdateUserAddressInput,
  UpdateUserNameInput,
} from "../../utils/schema/user.schema";
import axiosApi from "../axios";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

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

// Get User
const getUser = async (id: string) => {
  const response = await axiosApi.get<IUser>(`/user/${id}`);
  return response.data;
};

const useUser = (id: string) => {
  return useQuery([`user-${id}`], {
    queryFn: () => getUser(id),
    enabled: !!id,
    staleTime: 100000,
    cacheTime: 100000,
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
// Update User Name
const updateUserName = async (data: UpdateUserNameInput, id: string) => {
  const response = await axiosApi.patch(`/user/${id}`, {
    ...data,
  });
  return response.data;
};

const useUpdateUserName = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateUserNameInput; id: string }) =>
      updateUserName(data, id),
    onSuccess: (response: { id: string }) => {
      queryClient.invalidateQueries([`user-${response.id}`]);
    },
  });
};

// Update User Address
enum AddressType {
  homeAddress = "homeAddress",
  workAddress = "workAddress",
  otherAddres = "otherAddress",
}
type UpdateAddress = {
  [key in AddressType]?: UpdateUserAddressInput;
};
const updateUserAddress = async (data: UpdateAddress, id: string) => {
  const response = await axiosApi.patch(`/user/${id}`, {
    ...data,
  });
  return response.data;
};

const useUpdateUserAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateAddress; id: string }) =>
      updateUserAddress(data, id),
    onSuccess: (response: { id: string }) => {
      queryClient.invalidateQueries([`user-${response.id}`]);
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
  useUpdateUserAddress,
  useUpdateUserName,
  useUser,
  useUsers,
  useUpdateUserStatus,
  useDeleteUser,
};
export default UserServices;
