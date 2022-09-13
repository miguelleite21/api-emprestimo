import { Router } from "express";
import { loansController } from "../controllers";
import validateSchema from "../middlewares/validateSchema.middleware";
import { loansSchema } from "../schemas/loans.schema";

const loansRouter = Router();

loansRouter.post(
  "/loans",
  validateSchema(loansSchema),
  loansController.createLoans
);
loansRouter.get("/loans", loansController.getLoans);

export default loansRouter;
