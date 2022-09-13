import { Request } from "express";
import { Loans } from "../entities/Loans";
import { loansRepository } from "../repositories";

interface ILoans {
  status: number;
  messege: string;
}

class LoansService {
  createLoans = async ({ validated }: Request): Promise<ILoans> => {
    if (validated.loanAmount < 50000) {
      return {
        status: 400,
        messege: "O valor minimo de emprestiomo é de R$50.000,00",
      };
    }
    if (validated.installmentValue < validated.loanAmount / 100) {
      return {
        status: 400,
        messege: "O valor minimo das parcelas é de 1% do valor do emprestimo",
      };
    }

    const loans: Loans = await loansRepository.save(validated);

    return { status: 201, messege: "Empréstimo realizado" };
  };

  getLoans = async () => {
    const loans = await loansRepository.all();

    return loans;
  };
}

export default new LoansService();
