import { MigrationInterface, QueryRunner } from "typeorm";

export class DevicePiority1691586003583 implements MigrationInterface {
    name = 'DevicePiority1691586003583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device\` ADD \`piority\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device\` DROP COLUMN \`piority\``);
    }

}
