import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(cors);
app.use(json());
app.use(helmet());

app.use("/cars");

export { app };
