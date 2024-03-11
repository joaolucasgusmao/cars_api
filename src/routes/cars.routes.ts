import { Router } from "express";
import { CarController } from "../controllers";
import { ensure } from "../middlewares";
import { createCarSchema, updateCarSchema } from "../schemas";
import { container } from "tsyringe";
import { CarService } from "../services";

const carRouter = Router();
container.registerSingleton("CarService", CarService);
const controller = container.resolve(CarController);

carRouter.post("/", ensure.validBody(createCarSchema), (req, res) =>
  controller.create(req, res)
);
carRouter.get("/", (req, res) => controller.read(req, res));

carRouter.use("/:carId", ensure.carNotExists);

carRouter.get("/:carId", (req, res) => controller.retrieve(req, res));
carRouter.patch("/:carId", ensure.validBody(updateCarSchema), (req, res) =>
  controller.update(req, res)
);
carRouter.delete("/:carId", (req, res) => controller.delete(req, res));

export { carRouter };
