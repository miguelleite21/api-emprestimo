import express, { NextFunction, Request, Response } from "express";
import registerRouters from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  app.use(cors());
  next();
});

registerRouters(app);

export default app;
