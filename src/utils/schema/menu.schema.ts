import { z } from "zod";

// creating a new category schema
export const newCategorySchema = z.object({
  name: z.string().nonempty({ message: "Product name cannot be empty string" }),
  products: z
    .array(z.object({ value: z.string().or(z.number()), label: z.string() }))
    .optional(),
  extras: z
    .array(z.object({ value: z.string().or(z.number()), label: z.string() }))
    .optional(),
});

export type NewCategoryInput = z.TypeOf<typeof newCategorySchema>;

// updating category schema
export const updateCategorySchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Product name cannot be empty string" })
    .optional(),
  products: z
    .array(z.object({ value: z.string().or(z.number()), label: z.string() }))
    .optional(),
  extras: z
    .array(z.object({ value: z.string().or(z.number()), label: z.string() }))
    .optional(),
});

export type UpdateCategoryInput = z.TypeOf<typeof updateCategorySchema>;

// creating a new product schema
export const newProductSchema = z.object({
  name: z.string().nonempty({ message: "Product name cannot be empty string" }),
  description: z
    .string()
    .nonempty({ message: "Product name cannot be empty string" })
    .min(10, "Must be 10 or more characters long"),
  ingridients: z
    .string()
    .nonempty({ message: "Please enter some of the ingridients" })
    .min(10, "Must be 10 or more characters long"),
  allergens: z
    .string()

    .optional(),
  tag: z
    .string()

    .optional(),
  sizes: z.array(z.object({ size: z.string(), price: z.number().positive() })),
  category: z
    .object({ value: z.string().or(z.number()), label: z.string() })
    .optional(),
});

export type NewProductInput = z.TypeOf<typeof newProductSchema>;

// updating product schema
export const updateProductSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Product name cannot be empty string" })
    .optional(),
  description: z
    .string()
    .nonempty({ message: "Product name cannot be empty string" })
    .min(10, "Must be 10 or more characters long")
    .optional(),
  ingridients: z
    .string()
    .nonempty({ message: "Ingridients cannot be empty string" })
    .min(10, "Must be 10 or more characters long")
    .optional(),
  allergens: z.string().optional(),
  tag: z.string().optional(),
  sizes: z.array(z.object({ size: z.string(), price: z.number() })).optional(),
  category: z
    .object({ value: z.string().or(z.number()), label: z.string() })
    .optional(),
});

export type UpdateProductInput = z.TypeOf<typeof updateProductSchema>;

// creating a new extra schema
export const newExtraSchema = z.object({
  name: z
    .string({ required_error: "Name field is required" })
    .nonempty({ message: "Name cannot be empty string" }),
  paid: z.boolean().or(z.string()),
  extraItems: z
    .array(z.object({ value: z.string().or(z.number()), label: z.string() }))
    .optional(),
});

export type NewExtraInput = z.TypeOf<typeof newExtraSchema>;

// updating extra schema
export const updateExtraSchema = z.object({
  name: z
    .string({ required_error: "Name field is required" })
    .nonempty({ message: "Name cannot be empty string" })
    .optional(),
  paid: z.boolean().or(z.string()).optional(),
  extraItems: z
    .array(z.object({ value: z.string().or(z.number()), label: z.string() }))
    .optional(),
});

export type UpdateExtraInput = z.TypeOf<typeof updateExtraSchema>;

// creating a new extraItem schema
export const newExtraItemSchema = z.object({
  name: z.string({ required_error: "ExtraItem name is required" }).nonempty(),
  price: z.number().min(0).optional(),
  allergens: z.string().optional(),
});

export type NewExtraItemInput = z.TypeOf<typeof newExtraItemSchema>;

// updating Item schema
export const updateExtraItemSchema = z.object({
  name: z
    .string({ required_error: "Extra Item name is required" })
    .nonempty({ message: "Extra Item name cannot be empty string" })
    .optional(),
  price: z.number().min(0).optional(),
  allergens: z.string().optional(),
});

export type UpdateExtraItemInput = z.TypeOf<typeof updateExtraItemSchema>;
