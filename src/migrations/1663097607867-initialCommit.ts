import { MigrationInterface, QueryRunner } from "typeorm";

export class initialCommit1663097607867 implements MigrationInterface {
    name = 'initialCommit1663097607867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "loans" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying NOT NULL, "uf" character varying NOT NULL, "birthDate" character varying NOT NULL, "loanAmount" double precision NOT NULL, "installmentValue" double precision NOT NULL, CONSTRAINT "PK_c9de65f7c31040c1f761a5a74aa" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "loans"`);
    }

}
