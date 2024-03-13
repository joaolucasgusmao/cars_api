import "reflect-metadata";
import { CarService } from "../../services";
import { container } from "tsyringe";
import { prisma } from "../../database/prisma";
import { createCarMock } from "../__mocks__";

describe("Unit test: Read Cars", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
    await prisma.cars.create({ data: createCarMock });
  });

  test("Should be able to read all cars.", async () => {
    const carService = container.resolve(CarService);

    const data = await carService.read();

    expect(data).toHaveLength(1);
  });
});
