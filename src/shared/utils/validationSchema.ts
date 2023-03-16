import { z } from "zod";

export const orderValidationSchema = z.object({
  street: z.string().nonempty(),
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
    // fruits: z.object(
    //   { value: z.string() },
    //   {
    //     invalid_type_error: "Selection is required !",
    //     required_error: "Please make a selection",
    //   }
    // ),
    // multiFruits: z
    //   .object(
    //     { value: z.string() },
    //     { required_error: "Please make a selection" }
    //   )
    //   .array()
    //   .nonempty({ message: "Selection is required !" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterValidationSchema = z.infer<typeof registerValidationSchema>;
