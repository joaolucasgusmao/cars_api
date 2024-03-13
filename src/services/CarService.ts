import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { CarReturn, CreateCar, UpdateCar } from "../interfaces";
import { carSchema } from "../schemas";

@injectable()
export class CarService {
  public create = async (payLoad: CreateCar): Promise<CarReturn> => {
    return carSchema.parse(await prisma.cars.create({ data: payLoad }));
  };

  public read = async (): Promise<Array<CarReturn>> => {
    return carSchema.array().parse(await prisma.cars.findMany());
  };

  public retrieve = async (carId: string): Promise<CarReturn> => {
    return carSchema.parse(
      await prisma.cars.findFirst({ where: { id: carId } })
    );
  };

  public update = async (
    payLoad: UpdateCar,
    carId: string
  ): Promise<CarReturn> => {
    return carSchema.parse(
      await prisma.cars.update({ where: { id: carId }, data: payLoad })
    );
  };

  public delete = async (carId: string): Promise<void> => {
    await prisma.cars.delete({ where: { id: carId } });
  };
}
