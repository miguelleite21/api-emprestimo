import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Loans } from "../entities/Loans";

interface ILoansRepo {
  save: (loans: Loans) => Promise<Loans>;
  all: () => Promise<Loans[]>;
}

class LoansRepo implements ILoansRepo {
  private ormRepo: Repository<Loans>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Loans);
  }

  save = async (loans: Loans) => await this.ormRepo.save(loans);
  all = async () => await this.ormRepo.find();
}

export default new LoansRepo();
