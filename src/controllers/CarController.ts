import { Request, Response } from "express";
import { CarService } from "../services";
import { inject, injectable } from "tsyringe";

@injectable()
export class CarController {
  constructor(@inject("CarService") private carService: CarService) {}

  public create = async (
    { body }: Request,
    res: Response
  ): Promise<Response> => {
    return res.status(201).json(await this.carService.create(body));
  };

  public read = async (_: Request, res: Response): Promise<Response> => {
    return res.status(200).json(await this.carService.read());
  };

  public retrieve = async (
    { params }: Request,
    res: Response
  ): Promise<Response> => {
    return res.status(200).json(await this.carService.retrieve(params.carId));
  };

  public update = async (
    { body, params }: Request,
    res: Response
  ): Promise<Response> => {
    return res
      .status(200)
      .json(await this.carService.update(body, params.carId));
  };

  public delete = async (
    { params }: Request,
    res: Response
  ): Promise<Response> => {
    await this.carService.delete(params.carId);
    return res.status(204).json();
  };
}
