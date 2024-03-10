import { Router } from "express";
import { CarController } from "../controllers";
import { ensure } from "../middlewares";
import { createCarSchema, updateCarSchema } from "../schemas";

const carRouter = Router();
const controller = new CarController();

carRouter.post("/", ensure.validBody(createCarSchema), controller.create);
carRouter.get("/", controller.read);

carRouter.use("/:carId", ensure.carNotExists);

carRouter.get("/:carId", controller.retrieve);
carRouter.patch(
  "/:carId",
  ensure.validBody(updateCarSchema),
  controller.update
);
carRouter.delete("/:carId", controller.delete);

export { carRouter };
