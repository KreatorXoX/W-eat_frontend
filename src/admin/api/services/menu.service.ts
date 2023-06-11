import {
  NewExtraInput,
  NewExtraItemInput,
  UpdateExtraInput,
  UpdateExtraItemInput,
} from "../../../utils/schema/menu.schema";

import axiosApi from "../axios";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

// Extras
// Get All Extra Items
const getExtras = async () => {
  const response = await axiosApi.get<IExtra[]>("/menu/extra");
  return response.data;
};

const useExtras = () => {
  return useQuery(["extras"], {
    queryFn: () => getExtras(),
  });
};
// Get Extra Item by Id
const getExtra = async (id: string) => {
  const response = await axiosApi.get<IExtra>(`/menu/extra/${id}`);
  return response.data;
};

const useExtra = (id: string | undefined) => {
  return useQuery([`extra-${id}`], {
    queryFn: () => getExtra(id!),
    enabled: !!id,
  });
};

// Create New Extra Item
type NewExtraInputApi = {
  name?: string;
  paid?: string | boolean;
  extraItems?: string[];
};
const createExtra = async (data: NewExtraInput) => {
  const transformedData: NewExtraInputApi = {
    name: data.name,
    paid: data.paid === "true",
    extraItems: data.extraItems?.map((item: any) => item.value),
  };
  const response = await axiosApi.post("/menu/extra", {
    ...transformedData,
  });
  return response.data;
};

const useCreateExtra = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewExtraInput) => createExtra(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["extras"]);
    },
  });
};

// Update Extra Item
type UpdateExtraInputApi = {
  name?: string;
  paid?: string | boolean;
  extraItems?: string[];
};
const updateExtra = async (data: UpdateExtraInput, id: string) => {
  const transformedData: UpdateExtraInputApi = {
    name: data.name,
    paid: data.paid === "true",
    extraItems: data.extraItems?.map((item: any) => item.value),
  };
  // const transformedData: UpdateExtraInputApi = {
  //   name: data.name,
  //     paid: data.paid === "true",
  //   extraItems:
  //     data.extraItems && data.extraItems.length > 0
  //       ? data.extraItems?.map((item: any) => item.value)
  //       : undefined,
  // };
  const response = await axiosApi.patch(`/menu/extra/${id}`, {
    ...transformedData,
  });
  return response.data;
};

const useUpdateExtra = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateExtraInput; id: string }) =>
      updateExtra(data, id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries([`extra-${response._id}`]);
    },
  });
};
// Delete Extra Item
const deleteExtra = async (id: string) => {
  const response = await axiosApi.delete(`/menu/extra/${id}`);
  return response.data;
};

const useDeleteExtra = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteExtra(id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries(["extras"]);
    },
  });
};

// Extra Items
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

const MenuServices = {
  useCreateExtra,
  useExtras,
  useExtra,
  useUpdateExtra,
  useDeleteExtra,
  useCreateExtraItem,
  useExtraItems,
  useExtraItem,
  useUpdateExtraItem,
  useDeleteExtraItem,
};
export default MenuServices;
