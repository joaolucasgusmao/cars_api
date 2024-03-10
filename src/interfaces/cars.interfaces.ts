import { z } from "zod";
import {
  carSchema,
  createCarSchema,
} from "../schemas";

type CarReturn = z.infer<typeof carSchema>;
type CreateCar = z.infer<typeof createCarSchema> & {
  description: number | null;
};
type UpdateCar = Partial<CreateCar>;

export { CarReturn, CreateCar, UpdateCar };
