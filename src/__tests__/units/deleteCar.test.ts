import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { CarService } from "../../services";
import { createCarMock } from "../__mocks__";
import { container } from "tsyringe";

describe("Unit test: Delete Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to delete a car.", async () => {
    const newCar = await prisma.cars.create({ data: createCarMock });
    const carService = container.resolve(CarService);

    const data = await carService.delete(newCar.id);

    expect(data).toBeUndefined();

    const carExists = await prisma.cars.findFirst({ where: { id: newCar.id } });

    expect(carExists).toBeNull();
  });
});
