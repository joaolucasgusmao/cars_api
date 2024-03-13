import { prisma } from "../../database/prisma";
import { carMock, carNotFoundMessageMock, createCarMock } from "../__mocks__";
import { request } from "../utils";

describe("Integration test: Retrieve Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to retrieve a car.", async () => {
    const newCar = await prisma.cars.create({ data: createCarMock });

    const data = await request
      .get(`/cars/${newCar.id}`)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toBeDefined;
    expect(data.name).toBe(carMock.name);
    expect(data.description).toBe(carMock.description);
    expect(data.brand).toBe(carMock.brand);
    expect(data.year).toBe(carMock.year);
    expect(data.km).toBe(carMock.km);
  });

  test("Should not be able to retrieve a car with invalid id.", async () => {
    const data = await request
      .get("/cars/invalidCarId")
      .expect(404)
      .then((response) => response.body);

    expect(data).toEqual(carNotFoundMessageMock);
  });
});
