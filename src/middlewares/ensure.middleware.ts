import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "./errors";

export class EnsureMiddleware {
  public carNotExists = async (
    { params }: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {
    const { carId } = params;

    const carFound = await prisma.cars.findFirst({
      where: { id: Number(carId) },
    });

    if (!carFound) throw new AppError("Car not found.", 404);
  };
}

const ensure = new EnsureMiddleware();

export { ensure };
