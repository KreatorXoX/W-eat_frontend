import { z } from "zod";

// updating user schema
export const updateUserNameSchema = z.object({
  name: z.string().nonempty({ message: "User name cannot be empty string" }),
  email: z.string().optional(),
});
export type UpdateUserNameInput = z.TypeOf<typeof updateUserNameSchema>;

// Update User Address Schema
export const updateUserAddressSchema = z.object({
  street: z.string().nonempty("Street is required"),
  city: z.string().nonempty("City is required"),
  houseNumber: z.string().nonempty("House number is required"),
  postalCode: z.string().nonempty("Postal code is required"),
});
export type UpdateUserAddressInput = z.TypeOf<typeof updateUserAddressSchema>;
