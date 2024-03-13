import { prisma } from "../../database/prisma";
import { createCarMock } from "../__mocks__";
import { request } from "../utils";

describe("Integration test: Read Cars", () => {
  beforeEach(async () => {
    await prisma.cars.deleteMany();
    await prisma.cars.create({ data: createCarMock });
  });

  test("Should be able to read all cars.", async () => {
    const data = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(1);
  });
});
