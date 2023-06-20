import { z } from "zod";

const optionSelect = z.object({
  value: z.string().or(z.number()),
  label: z.string(),
});

export const productCartSchema = z.object({
  extras: z.record(
    z.object({ value: z.string(), label: z.string() }).array().optional()
  ),
  size: optionSelect,
});

export type ProductCartInput = z.infer<typeof productCartSchema>;
