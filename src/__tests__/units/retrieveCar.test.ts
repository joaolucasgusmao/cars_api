import "reflect-metadata";
import { CarService } from "../../services";
import { prisma } from "../../database/prisma";
import { carMock, createCarMock } from "../__mocks__";
import { container } from "tsyringe";

describe("Unit test: Retrieve Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to retrieve a car.", async () => {
    const newCar = await prisma.cars.create({ data: createCarMock });
    const carService = container.resolve(CarService);

    const data = await carService.retrieve(newCar.id);

    expect(data.id).toBeDefined;
    expect(data.name).toBe(carMock.name);
    expect(data.description).toBe(carMock.description);
    expect(data.brand).toBe(carMock.brand);
    expect(data.year).toBe(carMock.year);
    expect(data.km).toBe(carMock.km);
  });
});
