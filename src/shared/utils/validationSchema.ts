import { z } from "zod";

export const orderValidationSchema = z.object({
  street: z.string().nonempty({ message: "This field is required" }),
  houseNumber: z.string().nonempty({ message: "This field is required" }),
  postCode: z.string().nonempty({ message: "This field is required" }),
  city: z.string().nonempty({ message: "This field is required" }),
  company: z.string().optional(),
  notes: z.string().optional(),
  fullname: z.string().nonempty({ message: "This field is required" }),
  email: z.string().email({ message: "Please provide a valid email" }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Provide phone number in the given format" }),
  deliveryTime: z.object(
    { value: z.string(), label: z.string() },
    {
      invalid_type_error: "Selection is required !",
      required_error: "Please make a selection",
    }
  ),

  paymentMethod: z.object(
    { value: z.string(), label: z.string() },
    {
      invalid_type_error: "Selection is required !",
      required_error: "Please make a selection",
    }
  ),
});

export type OrderValidationSchema = z.infer<typeof orderValidationSchema>;

export const loginValidationSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z.string().min(3).max(8),
});

export type LoginValidationSchema = z.infer<typeof loginValidationSchema>;

export const registerValidationSchema = z
  .object({
    name: z.string().nonempty(),
    email: z.string().email({ message: "Please provide a valid email" }),
    password: z.string().min(3).max(8),
    confirmPassword: z.string().min(3).max(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterValidationSchema = z.infer<typeof registerValidationSchema>;

export const selectExtraItem = z.record(
  z.object({ value: z.string(), label: z.string() }).array().optional()
);

export type SelectExtraItem = z.infer<typeof selectExtraItem>;

export const newAddressValidationSchema = z.object({
  street: z.string().nonempty({ message: "This field is required" }),
  houseNumber: z.string().nonempty({ message: "This field is required" }),
  postCode: z.string().nonempty({ message: "This field is required" }),
  city: z.string().nonempty({ message: "This field is required" }),
});

export type NewAddressValidationSchema = z.infer<
  typeof newAddressValidationSchema
>;

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(3).max(8),
    newPassword: z.string().min(3).max(8),
    confirmNewPassword: z.string().min(3).max(8),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords don't match",
    path: ["confirmNewPassword"],
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

export const newCategorySchema = z.object({
  name: z.string().min(3).max(8),
  products: z.string().optional(),
  extras: z.string().optional(),
});

export type NewCategorySchema = z.infer<typeof newCategorySchema>;

const sizeSchema = z.object({
  size: z.string().nonempty({ message: "Provide a price label" }),
  price: z.number().gt(0),
});

export const newProductSchema = z.object({
  name: z.string().min(3).max(8),
  category: z.string().nonempty(),
  tag: z.string().optional(),
  description: z.string().nonempty(),
  ingridients: z.string().optional(),
  allergens: z.string().optional(),
  sizes: z.array(sizeSchema).min(1),
});

export type NewProductSchema = z.infer<typeof newProductSchema>;

const extraItemSchema = z.object({
  value: z.string(),
  label: z.string(),
});
export const newExtraSchema = z.object({
  name: z.string().min(3),
  paid: z.string().nonempty({ message: "pick one" }),
  extraItems: z.array(extraItemSchema).optional(),
});

export type NewExtraSchema = z.infer<typeof newExtraSchema>;

export const newExtraProductSchema = z.object({
  name: z.string().min(3),
  price: z.optional(z.number().gte(0).or(z.nan())),
  allergens: z.string().optional(),
});

export type NewExtraProductSchema = z.infer<typeof newExtraProductSchema>;
