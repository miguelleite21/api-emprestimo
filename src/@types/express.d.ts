import { Loans } from "../entities/Loans";

declare global {
  namespace Express {
    interface Request {
      validated: Loans;
    }
  }
}
