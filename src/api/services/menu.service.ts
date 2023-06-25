import {
  NewCategoryInput,
  NewExtraInput,
  NewExtraItemInput,
  NewProductInput,
  UpdateCategoryInput,
  UpdateExtraInput,
  UpdateExtraItemInput,
  UpdateProductInput,
} from "../../utils/schema/menu.schema";
import axiosApi from "../axios";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

// Menu
// Get Menu
const getMenu = async () => {
  const response = await axiosApi.get<IMenu>("/menu");
  return response.data;
};

const useMenu = () => {
  return useQuery(["menu"], {
    queryFn: () => getMenu(),
    staleTime: Infinity,
  });
};

// Categories
// Get All Categories
const getCategories = async () => {
  const response = await axiosApi.get<ICategory[]>("/menu/category");
  return response.data;
};

const useCategories = () => {
  return useQuery(["categories"], {
    queryFn: () => getCategories(),
  });
};
// Get Category by Id
const getCategory = async (id: string) => {
  const response = await axiosApi.get<ICategory>(`/menu/category/${id}`);
  return response.data;
};

const useCategory = (id: string | undefined) => {
  return useQuery([`category-${id}`], {
    queryFn: () => getCategory(id!),
    enabled: !!id,
  });
};

// Create New Category
type NewCategoryInputApi = {
  name: string;
  products?: string[];
  extras?: string[];
};
const createCategory = async (data: NewCategoryInput) => {
  const transformedData: NewCategoryInputApi = {
    name: data.name,
    products: data.products?.map((product) => product.value as string),
    extras: data.extras?.map((extra) => extra.value as string),
  };
  const response = await axiosApi.post("/menu/category", {
    ...transformedData,
  });
  return response.data;
};

const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewCategoryInput) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

// Update Category
type UpdateCategoryInputApi = {
  name?: string;
  products?: string[];
  extras?: string[];
};
const updateCategory = async (data: UpdateCategoryInput, id: string) => {
  const transformedData: UpdateCategoryInputApi = {
    name: data.name,
    products: data.products?.map((product) => product.value as string),
    extras: data.extras?.map((extra) => extra.value as string),
  };
  const response = await axiosApi.patch(`/menu/category/${id}`, {
    ...transformedData,
  });
  return response.data;
};

const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateCategoryInput; id: string }) =>
      updateCategory(data, id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries([`category-${response._id}`]);
    },
  });
};
// Delete Category
const deleteCategory = async (id: string) => {
  const response = await axiosApi.delete(`/menu/category/${id}`);
  return response.data;
};

const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

// Products
// Get All Product Items Without Category
const getUncategorizedProducts = async () => {
  const response = await axiosApi.get<IProduct[]>(
    "/menu/products-without-category"
  );
  return response.data;
};

const useUncategorizedProducts = () => {
  return useQuery(["products-without-category"], {
    queryFn: () => getUncategorizedProducts(),
  });
};
// Get All Product Items
const getProducts = async () => {
  const response = await axiosApi.get<IProduct[]>("/menu/product");
  return response.data;
};

const useProducts = () => {
  return useQuery(["products"], {
    queryFn: () => getProducts(),
  });
};
// Get Product Item by Id
const getProduct = async (id: string) => {
  const response = await axiosApi.get<IProduct>(`/menu/product/${id}`);
  return response.data;
};

const useProduct = (id: string | undefined) => {
  return useQuery([`product-${id}`], {
    queryFn: () => getProduct(id!),
    enabled: !!id,
  });
};

// Create New Product Item
type NewProductInputApi = {
  name: string;
  description: string;
  sizes: {
    size: string;
    price: number;
  }[];
  ingridients?: string;
  allergens?: string;
  tag?: string;
  category?: string;
};
const createProduct = async (data: NewProductInput) => {
  const transformedData: NewProductInputApi = {
    allergens: data.allergens || undefined,
    category: data.category?.value as string,
    description: data.description,
    ingridients: data.ingridients,
    name: data.name,
    sizes: data.sizes,
    tag: data.tag || undefined,
  };
  const response = await axiosApi.post("/menu/product", {
    ...transformedData,
  });
  return response.data;
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewProductInput) => createProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
};

// Update Product
type UpdateProductInputApi = {
  name?: string;
  description?: string;
  sizes?: {
    size: string;
    price: number;
  }[];
  ingridients?: string;
  allergens?: string;
  tag?: string;
  category?: string;
};
const updateProduct = async (data: UpdateProductInput, id: string) => {
  const transformedData: UpdateProductInputApi = {
    allergens: data.allergens,
    category: data.category?.value as string,
    description: data.description,
    ingridients: data.ingridients,
    name: data.name,
    sizes: data.sizes,
    tag: data.tag,
  };

  const response = await axiosApi.patch(`/menu/product/${id}`, {
    ...transformedData,
  });
  return response.data;
};

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateProductInput; id: string }) =>
      updateProduct(data, id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries([`product-${response._id}`]);
    },
  });
};
// Delete Product Item
const deleteProduct = async (id: string) => {
  const response = await axiosApi.delete(`/menu/product/${id}`);
  return response.data;
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: (response: { _id: string }) => {
      queryClient.invalidateQueries(["products"]);
    },
  });
};

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
  useMenu,
  useCreateCategory,
  useCategories,
  useCategory,
  useUpdateCategory,
  useDeleteCategory,
  useCreateProduct,
  useProducts,
  useUncategorizedProducts,
  useProduct,
  useUpdateProduct,
  useDeleteProduct,
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
