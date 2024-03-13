import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { CarService } from "../../services";
import { carMock, createCarMock, updateCarMock } from "../__mocks__";
import { container } from "tsyringe";

describe("Unit test: Update Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to update a car.", async () => {
    const newCar = await prisma.cars.create({ data: createCarMock });
    const carService = container.resolve(CarService);

    const data = await carService.update(updateCarMock, newCar.id);

    expect(data.id).toBeDefined;
    expect(data.name).toBe(updateCarMock.name);
    expect(data.description).toBe(carMock.description);
    expect(data.brand).toBe(carMock.brand);
    expect(data.year).toBe(carMock.year);
    expect(data.km).toBe(carMock.km);
  });
});
