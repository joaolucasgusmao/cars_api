import { z } from "zod";
import {
  carSchema,
  createCarSchema,
  returnCarSchema,
  updateCarSchema,
} from "../schemas";

type CarReturn = z.infer<typeof carSchema>;
type GetCarReturn = z.infer<typeof returnCarSchema>;
type CreateCar = z.infer<typeof createCarSchema> & {
  description: number | null;
};
type UpdateCar = Partial<CreateCar>;

export { CarReturn, CreateCar, GetCarReturn, UpdateCar };
