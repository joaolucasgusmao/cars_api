import { prisma } from "../../database/prisma";
import { carMock, createCarMock, updateCarMock } from "../__mocks__";
import { request } from "../utils";

describe("Integration test: Update Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to update a car.", async () => {
    const newCar = await prisma.cars.create({ data: createCarMock });

    const data = await request
      .patch(`/cars/${newCar.id}`)
      .send(updateCarMock)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toBeDefined;
    expect(data.name).toBe(updateCarMock.name);
    expect(data.description).toBe(carMock.description);
    expect(data.brand).toBe(carMock.brand);
    expect(data.year).toBe(carMock.year);
    expect(data.km).toBe(carMock.km);
  });
});
