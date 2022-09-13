import loansRouter from "./loans.routes";
import { Express } from "express";
const registerRouters = (app: Express): void => {
  app.use(loansRouter);
};

export default registerRouters;
