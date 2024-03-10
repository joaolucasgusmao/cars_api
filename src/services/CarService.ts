import { prisma } from "../database/prisma";
import { CarReturn, CreateCar, GetCarReturn, UpdateCar } from "../interfaces";
import { carSchema, returnCarSchema } from "../schemas";

export class CarService {
  public create = async (payLoad: CreateCar): Promise<CarReturn> => {
    return carSchema.parse(await prisma.cars.create({ data: payLoad }));
  };

  public read = async (): Promise<Array<GetCarReturn>> => {
    return returnCarSchema.array().parse(await prisma.cars.findMany());
  };

  public retrieve = async (carId: number): Promise<CarReturn> => {
    return carSchema.parse(
      await prisma.cars.findFirst({ where: { id: carId } })
    );
  };

  public update = async (
    payLoad: UpdateCar,
    carId: number
  ): Promise<CarReturn> => {
    return carSchema.parse(
      await prisma.cars.update({ where: { id: carId }, data: payLoad })
    );
  };

  public delete = async (carId: number): Promise<void> => {
    await prisma.cars.delete({ where: { id: carId } });
  };
}
