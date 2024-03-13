import { prisma } from "../../database/prisma";
import { carNotFoundMessageMock, createCarMock } from "../__mocks__";
import { request } from "../utils";

describe("Integration test: Delete Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to delete a car.", async () => {
    const newCar = await prisma.cars.create({ data: createCarMock });

    const data = await request
      .delete(`/cars/${newCar.id}`)
      .expect(204)
      .then((response) => response.body);

    expect(data).toEqual({});

    const carExists = await prisma.cars.findFirst({ where: { id: newCar.id } });

    expect(carExists).toBeNull();
  });

  test("Should not be able to delete a car with invalid id.", async () => {
    const data = await request
      .delete("/cars/invalidId")
      .expect(404)
      .then((response) => response.body);

    expect(data).toEqual(carNotFoundMessageMock);
  });
});
