import { z } from "zod";

export const orderValidationSchema = z.object({
  street: z.string().nonempty({ message: "This field is required" }),
  houseNumber: z.string().nonempty({ message: "This field is required" }),
  postCode: z.string().nonempty({ message: "This field is required" }),
  city: z.string().nonempty({ message: "This field is required" }),
  company: z.string().optional(),
  notes: z.string().optional(),
  fullname: z.string().nonempty({ message: "This field is required" }),
  email: z.string().email({ message: "Please prove a valid email" }),
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
  email: z.string().email({ message: "Please prove a valid email" }),
  password: z.string().min(3).max(8),
});

export type LoginValidationSchema = z.infer<typeof loginValidationSchema>;

export const registerValidationSchema = z
  .object({
    name: z.string().nonempty(),
    email: z.string().email({ message: "Please prove a valid email" }),
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
