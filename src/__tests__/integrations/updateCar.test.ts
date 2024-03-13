import { prisma } from "../../database/prisma";
import {
  carMock,
  createCarMock,
  invalidBodyMessageMock,
  updateCarMock,
} from "../__mocks__";
import {
  carNotFoundMessageMock,
  invalidBodyUpdateMessageMock,
  invalidBodyUpdateMock,
} from "../__mocks__/errors.mocks";
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

  test("Should not be able to update a car with invalid body.", async () => {
    const newCar = await prisma.cars.create({ data: createCarMock });

    const data = await request
      .patch(`/cars/${newCar.id}`)
      .send(invalidBodyUpdateMock)
      .expect(400)
      .then((response) => response.body);

    expect(data).toEqual(invalidBodyUpdateMessageMock);
  });

  test("Should not be able to update a car with invalid id.", async () => {
    const data = await request
      .patch("/cars/invalidCarId")
      .expect(404)
      .send(updateCarMock)
      .then((response) => response.body);

    expect(data).toEqual(carNotFoundMessageMock);
  });
});
