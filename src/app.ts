// import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import { carRouter } from "./routes";
import { handleErrors } from "./middlewares";

export const app = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.use("/cars", carRouter);

app.use(handleErrors);
