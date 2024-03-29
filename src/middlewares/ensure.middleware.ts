import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "./errors";
import { AnyZodObject } from "zod";

export class EnsureMiddleware {
  public validBody =
    (schema: AnyZodObject) =>
    async (
      { body }: Request,
      _: Response,
      next: NextFunction
    ): Promise<void> => {
      body = await schema.parseAsync(body);

      return next();
    };

  public carNotExists = async (
    { params }: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {
    const { carId } = params;

    const carFound = await prisma.cars.findFirst({
      where: { id: carId },
    });

    if (!carFound) throw new AppError("Car not found.", 404);

    return next();
  };
}

const ensure = new EnsureMiddleware();

export { ensure };
