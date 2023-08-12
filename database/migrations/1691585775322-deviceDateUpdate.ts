import { MigrationInterface, QueryRunner } from "typeorm";

export class DeviceDateUpdate1691585775322 implements MigrationInterface {
    name = 'DeviceDateUpdate1691585775322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device\` ADD \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD \`actualUpdateDate\` datetime NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device\` DROP COLUMN \`actualUpdateDate\``);
        await queryRunner.query(`ALTER TABLE \`device\` DROP COLUMN \`updatedAt\``);
    }

}
