import { z } from "zod";

// creating a new category schema
export const newCategorySchema = z.object({
  name: z.string().nonempty({ message: "Product name cannot be empty string" }),
  products: z.array(z.string()).optional(),
  extras: z.array(z.string()).optional(),
});

export type NewCategoryInput = z.TypeOf<typeof newCategorySchema>;

// updating category schema
export const updateCategorySchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Product name cannot be empty string" })
    .optional(),
  products: z.array(z.string().optional()),
  extras: z.array(z.string()).optional(),
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
    .nonempty({ message: "Product name cannot be empty string" })
    .min(10, "Must be 10 or more characters long"),
  allergens: z
    .string()
    .nonempty({ message: "Allergens cannot be empty string" })
    .transform((allergens, ctx) => {
      const allergensArray = allergens.split(",");
      if (!allergensArray) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "allergens should be seperated by a comma",
        });

        return z.NEVER;
      }
      return allergensArray;
    })
    .optional(),

  tag: z
    .string()
    .nonempty({ message: "Product name cannot be empty string" })
    .optional(),
  sizes: z.array(z.object({ size: z.string(), price: z.number() })),
  category: z
    .string()

    .optional(),
});

export type NewProductInput = z.TypeOf<typeof newProductSchema>;

// updating product schema
export const updateProductSchema = z.object({
  params: z.object({
    id: z
      .string()

      .optional(),
  }),

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
  allergens: z
    .string()
    .nonempty({ message: "Allergen cannot be empty string" })
    .optional(),
  tag: z
    .string()
    .nonempty({ message: "Tag cannot be empty string" })
    .optional(),
  sizes: z.array(z.object({ size: z.string(), price: z.number() })).optional(),
  category: z
    .string()

    .optional(),
});

export type UpdateProductInput = z.TypeOf<typeof updateProductSchema>;

// creating a new extra schema
export const newExtraSchema = z.object({
  name: z
    .string({ required_error: "Name field is required" })
    .nonempty({ message: "Name cannot be empty string" }),
  paid: z.boolean(),
  extraItems: z.array(z.string()).optional(),
});

export type NewExtraInput = z.TypeOf<typeof newExtraSchema>;

// updating extra schema
export const updateExtraSchema = z.object({
  name: z
    .string({ required_error: "Name field is required" })
    .nonempty({ message: "Name cannot be empty string" })
    .optional(),
  paid: z.boolean().optional(),
  extraItems: z.array(z.string()).optional(),
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
