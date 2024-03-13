import { prisma } from "../../database/prisma";
import { request } from "../utils";
import { carMock, createCarMock } from "../__mocks__";

describe("Integration test: Create Car", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
  });

  test("Should be able to create a car.", async () => {
    const data = await request
      .post("/cars")
      .send(createCarMock)
      .expect(201)
      .then((response) => response.body);

    expect(data.id).toBeDefined();
    expect(data.name).toBe(carMock.name);
    expect(data.description).toBe(carMock.description);
    expect(data.brand).toBe(carMock.brand);
    expect(data.year).toBe(carMock.year);
    expect(data.km).toBe(carMock.km);
  });
});
