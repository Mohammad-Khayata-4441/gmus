import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDate1691032885576 implements MigrationInterface {
    name = 'CreateDate1691032885576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inverter_log\` ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inverter_log\` DROP COLUMN \`created_at\``);
    }

}
