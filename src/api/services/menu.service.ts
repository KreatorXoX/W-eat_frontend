import { useAuthStore } from "../../context/useAuthStore";
import {
  UpdateUserAddressInput,
  UpdateUserNameInput,
} from "../../utils/schema/user.schema";
import axiosApi from "../axios";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

// Get Menu
const getMenu = async () => {
  const response = await axiosApi.get<IMenu>("/menu");
  return response.data;
};

const useMenu = () => {
  return useQuery(["menu"], {
    queryFn: () => getMenu(),
    staleTime: 100000,
    cacheTime: 100000,
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

// Get User Orders
const getUserOrders = async (id: string) => {
  const response = await axiosApi.get<{
    allOrders: IOrder[];
    favouriteOrders: IOrder[];
  }>(`/user/orders/${id}`);
  return response.data;
};

const useUserOrders = (id: string) => {
  return useQuery([`userOrders-${id}`], {
    queryFn: () => getUserOrders(id),
    enabled: !!id,
  });
};

// Get User Favorites
const getUserFavorites = async (id: string) => {
  const response = await axiosApi.get<IOrder[]>(`/user/favorites/${id}`);
  return response.data;
};

const useUserFavorites = (id: string) => {
  return useQuery([`userFavorites-${id}`], {
    queryFn: () => getUserFavorites(id),
    enabled: !!id,
  });
};

const UserServices = {
  useUpdateUserAddress,
  useUpdateUserName,
  useMenu,
  useUserOrders,
  useUserFavorites,
};
export default UserServices;
