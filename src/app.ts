import express, { NextFunction, Request, Response } from "express";
import registerRouters from "./routes";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());


registerRouters(app);

export default app;
