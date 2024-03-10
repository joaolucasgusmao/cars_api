import { z } from "zod";
import {
  carSchema,
  createCarSchema,
  returnCarSchema,
  updateCarSchema,
} from "../schemas";

type CarReturn = z.infer<typeof carSchema>;
type GetCarReturn = z.infer<typeof returnCarSchema>;
type CreateCar = z.infer<typeof createCarSchema>;
type UpdateCar = z.infer<typeof updateCarSchema>;

export { CarReturn, CreateCar, GetCarReturn, UpdateCar };
