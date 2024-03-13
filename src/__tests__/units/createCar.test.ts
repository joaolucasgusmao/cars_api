import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { CarService } from "../../services";
import { carMock, createCarMock } from "../__mocks__";
import { container } from "tsyringe";

describe("Unit test: Create Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to create a car.", async () => {
    const carService = container.resolve(CarService);

    const data = await carService.create(createCarMock);

    expect(data.id).toBeDefined;
    expect(data.name).toBe(carMock.name);
    expect(data.description).toBe(carMock.description);
    expect(data.brand).toBe(carMock.brand);
    expect(data.year).toBe(carMock.year);
    expect(data.km).toBe(carMock.km);
  });
});
