import { Request, Response } from "express";
import { loansService } from "../services";

class LoansController {
  createLoans = async (req: Request, res: Response) => {
    const { status, messege } = await loansService.createLoans(req);
    return res.status(status).json(messege);
  };
  getLoans = async (_: Request, res: Response) => {
    const loans = await loansService.getLoans();

    return res.status(200).json({ loans });
  };
}

export default new LoansController();
