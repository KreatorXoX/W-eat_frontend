import { useAuthStore } from "../../context/useAuthStore";
import {
  UpdateUserAddressInput,
  UpdateUserNameInput,
} from "../../utils/schema/user.schema";
import axiosApi from "../axios";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

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
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateAddress; id: string }) =>
      updateUserAddress(data, id),
  });
};

const UserServices = {
  useUpdateUserAddress,
  useUpdateUserName,
  useUser,
};
export default UserServices;
