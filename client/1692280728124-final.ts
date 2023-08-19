import { MigrationInterface, QueryRunner } from "typeorm";

export class Final1692280728124 implements MigrationInterface {
    name = 'Final1692280728124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`inverter\` (\`id\` varchar(36) NOT NULL, \`inverterNumber\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`customerName\` varchar(255) NOT NULL, \`customerLocation\` varchar(255) NOT NULL, \`customerPhoneNumber\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_67f328002913a2bfbe02f64558\` (\`inverterNumber\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`device\` (\`id\` varchar(36) NOT NULL, \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`actualUpdateDate\` datetime NULL, \`name\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL, \`inverterId\` varchar(255) NOT NULL, \`piority\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`userName\` varchar(255) NOT NULL, \`id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`inverter_log\` ADD CONSTRAINT \`FK_d296ca75b10a7cf5b81ccf2e209\` FOREIGN KEY (\`inverterId\`) REFERENCES \`inverter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`setting\` ADD CONSTRAINT \`FK_06579b8ae23c3c7f7d05f5fae27\` FOREIGN KEY (\`inverterId\`) REFERENCES \`inverter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD CONSTRAINT \`FK_4e96a9ed6ee408e5de3f00b83b5\` FOREIGN KEY (\`inverterId\`) REFERENCES \`inverter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device\` DROP FOREIGN KEY \`FK_4e96a9ed6ee408e5de3f00b83b5\``);
        await queryRunner.query(`ALTER TABLE \`setting\` DROP FOREIGN KEY \`FK_06579b8ae23c3c7f7d05f5fae27\``);
        await queryRunner.query(`ALTER TABLE \`inverter_log\` DROP FOREIGN KEY \`FK_d296ca75b10a7cf5b81ccf2e209\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`device\``);
        await queryRunner.query(`DROP INDEX \`IDX_67f328002913a2bfbe02f64558\` ON \`inverter\``);
        await queryRunner.query(`DROP TABLE \`inverter\``);
    }

}
