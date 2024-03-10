import { Router } from "express";
import { CarController } from "../controllers";
import { ensure } from "../middlewares";

const carRouter = Router();
const controller = new CarController();

carRouter.post("/", controller.create);
carRouter.get("/", controller.read);

carRouter.use("/:carId", ensure.carNotExists);

carRouter.get("/:carId", controller.retrieve);
carRouter.patch("/:carId", controller.update);
carRouter.delete("/:carId", controller.delete);

export { carRouter };
