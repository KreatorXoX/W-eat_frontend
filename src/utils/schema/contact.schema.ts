import { z } from "zod";

// creating a new user schema
export const contactUsSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .nonempty("Name can not be an empty string"),
  email: z.string().email().nonempty(),
  message: z.string().nonempty(),
});
export type ContactUsInput = z.TypeOf<typeof contactUsSchema>;
