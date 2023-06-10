import {
  NewExtraItemInput,
  UpdateExtraItemInput,
} from "../../../utils/schema/menu.schema";
import {
  UpdateUserAddressInput,
  UpdateUserNameInput,
} from "../../../utils/schema/user.schema";
import axiosApi from "../axios";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

// Get All Extra Items
const getExtraItems = async () => {
  const response = await axiosApi.get<IExtraItem[]>("/menu/extraItem");
  return response.data;
};

const useExtraItems = () => {
  return useQuery(["extraItems"], {
    queryFn: () => getExtraItems(),
  });
};
// Get Extra Item by Id
const getExtraItem = async (id: string) => {
  const response = await axiosApi.get<IExtraItem>(`/menu/extraItem/${id}`);
  return response.data;
};

const useExtraItem = (id: string | undefined) => {
  return useQuery([`extraItem-${id}`], {
    queryFn: () => getExtraItem(id!),
    enabled: !!id,
  });
};

// Create New Extra Item
const createExtraItem = async (data: NewExtraItemInput) => {
  const response = await axiosApi.post("/menu/extraItem", {
    ...data,
  });
  return response.data;
};

const useCreateExtraItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewExtraItemInput) => createExtraItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["extraItems"]);
    },
  });
};

// Update Extra Item
const updateExtraItem = async (data: UpdateExtraItemInput, id: string) => {
  const response = await axiosApi.patch(`/menu/extraItem/${id}`, {
    ...data,
  });
  return response.data;
};

const useUpdateExtraItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateExtraItemInput; id: string }) =>
      updateExtraItem(data, id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries([`extraItem-${response._id}`]);
    },
  });
};
// Delete Extra Item
const deleteExtraItem = async (id: string) => {
  const response = await axiosApi.delete(`/menu/extraItem/${id}`);
  return response.data;
};

const useDeleteExtraItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteExtraItem(id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries(["extraItems"]);
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

const MenuServices = {
  useCreateExtraItem,
  useExtraItems,
  useExtraItem,
  useUpdateExtraItem,
  useDeleteExtraItem,
};
export default MenuServices;
