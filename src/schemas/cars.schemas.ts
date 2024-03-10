import { z } from "zod";
import { baseSchema } from "./base.schema";

const carSchema = baseSchema.extend({
  name: z.string().min(2),
  description: z.string().min(8).nullish(),
  brand: z.string().min(2),
  year: z.number().min(2).positive(),
  km: z.number().min(1).positive(),
});

const createCarSchema = carSchema.omit({ id: true });
const updateCarSchema = carSchema.omit({ id: true }).partial();

export { carSchema, createCarSchema, updateCarSchema };
