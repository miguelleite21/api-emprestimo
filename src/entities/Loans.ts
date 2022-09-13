import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("loans")
export class Loans {
  @PrimaryGeneratedColumn("uuid")
  uuid?: string;

  @Column()
  cpf: string;

  @Column()
  uf: string;

  @Column()
  birthDate: string;

  @Column({ type: "float" })
  loanAmount: number;

  @Column({ type: "float" })
  installmentValue: number;
}
