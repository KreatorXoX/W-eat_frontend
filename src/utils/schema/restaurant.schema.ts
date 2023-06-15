import { z } from "zod";

// create restaurant schema
export const newRestaurantSchema = z.object({
  name: z
    .string({ required_error: "Restaurant name is required" })
    .nonempty("Restaurant name cannot be empty string"),
  address: z
    .string({ required_error: "Address is required" })
    .nonempty("Address cannot be empty string"),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  backgroundImage: z.string().optional(),
  minDeliveryAmount: z.number().min(1),
  averageDeliveryTime: z
    .string()
    .nonempty("Use the following format!, 45-75 min"),
  deliveryCost: z.number().min(1),
  operationTime: z.object({
    openingTime: z.string().nonempty("Opening Time cannot be empty string"),
    closingTime: z.string().nonempty("Closing Time cannot be empty string"),
  }),
  reviews: z.array(z.string()).optional(),
});

export type NewRestaurantInput = z.TypeOf<typeof newRestaurantSchema>;

// update restaurant schema
export const updateRestaurantSchema = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  backgroundImage: z.string().optional(),
  minDeliveryAmount: z.number().min(1).optional(),
  averageDeliveryTime: z.string().optional(),
  deliveryCost: z.number().min(1).optional(),
  operationTime: z
    .object({
      openingTime: z.string().optional(),
      closingTime: z.string().optional(),
    })
    .optional(),
});

export type UpdateRestaurantInput = z.TypeOf<typeof updateRestaurantSchema>;
