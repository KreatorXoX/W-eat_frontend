import { z } from "zod";

const OrderItem = z.object({
  product: z.string().nonempty(),
  extras: z.array(z.string().optional()).optional(),
  quantity: z.number().min(1),
  size: z.string().nonempty({ message: "Size has to be declared" }),
  note: z.string().optional(),
});

export enum Status {
  PENDING = "pending",
  ACCEPTED = "accepted",
  CANCELED = "canceled",
  DELIVERED = "delivered",
  SHIPPED = "shipped",
}

export enum PaymentStatus {
  SUCCESS = "successful",
  PENDING = "pending",
}
export enum PaymentMethod {
  CARD = "card",
  PAD = "pay at door",
}

// Checkout and create order schema

export const checkoutFormSchema = z.object({
  fullName: z.string().nonempty({ message: "Name cannot be empty string" }),
  company: z.string().optional(),
  notes: z.string().optional(),
  orderEmail: z.string().nonempty({ message: "Email cannot be empty string" }),
  status: z.nativeEnum(Status).optional(),
  city: z.string().nonempty("Empty string is not acceptable"),
  houseNumber: z.string().nonempty("Empty string is not acceptable"),
  street: z.string().nonempty("Empty string is not acceptable"),
  postCode: z.string().nonempty("Empty string is not acceptable"),
  phoneNumber: z
    .string()
    .nonempty({ message: "Address cannot be empty string" }),
  placeOrderTime: z.object({
    value: z.string(),
    label: z.string(),
  }),
  isFavourite: z.boolean().optional(),
  paymentMethod: z.object({
    value: z.nativeEnum(PaymentMethod),
    label: z.string(),
  }),
  paymentStatus: z.nativeEnum(PaymentStatus).optional(),
});

export type CheckoutFormInput = z.TypeOf<typeof checkoutFormSchema>;

export const newOrderSchema = z.object({
  orderItems: z.array(OrderItem),
  user: z.string().nonempty(),
  fullName: z.string().nonempty({ message: "Name cannot be empty string" }),
  company: z.string().optional(),
  note: z.string().optional(),
  email: z.string().nonempty({ message: "Email cannot be empty string" }),
  status: z.nativeEnum(Status).optional(),
  address: z.string(),
  phoneNumber: z
    .string()
    .nonempty({ message: "Address cannot be empty string" }),
  placeOrderTime: z.string(),
  isFavourite: z.boolean().optional(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
});

export type NewOrderInput = z.TypeOf<typeof newOrderSchema>;

// updating order schema
export const updateOrderSchema = z.object({
  status: z.nativeEnum(Status).optional(),
  paymentStatus: z.nativeEnum(PaymentStatus).optional(),
  isFavorite: z.boolean().optional(),
});
export type UpdateOrderInput = z.TypeOf<typeof updateOrderSchema>;
