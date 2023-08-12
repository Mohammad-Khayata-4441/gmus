import { MigrationInterface, QueryRunner } from "typeorm";

export class Settings1691835960817 implements MigrationInterface {
    name = 'Settings1691835960817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`setting\` (\`id\` varchar(36) NOT NULL, \`isManualMode\` tinyint NOT NULL DEFAULT 0, \`scvp\` int NOT NULL, \`sasmwol\` int NOT NULL, \`sasmwlv\` int NOT NULL, \`inverterId\` varchar(255) NOT NULL, UNIQUE INDEX \`REL_06579b8ae23c3c7f7d05f5fae2\` (\`inverterId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`setting\` ADD CONSTRAINT \`FK_06579b8ae23c3c7f7d05f5fae27\` FOREIGN KEY (\`inverterId\`) REFERENCES \`inverter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`setting\` DROP FOREIGN KEY \`FK_06579b8ae23c3c7f7d05f5fae27\``);
        await queryRunner.query(`DROP INDEX \`REL_06579b8ae23c3c7f7d05f5fae2\` ON \`setting\``);
        await queryRunner.query(`DROP TABLE \`setting\``);
    }

}
