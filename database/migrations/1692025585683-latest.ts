import { MigrationInterface, QueryRunner } from "typeorm";

export class Latest1692025585683 implements MigrationInterface {
    name = 'Latest1692025585683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`inverter_log\` (\`id\` varchar(36) NOT NULL, \`gridFrequencyHz\` int NOT NULL, \`inverterOutputVoltageV\` int NOT NULL, \`inverterOutputFrequencyHz\` int NOT NULL, \`apparentPowerVA\` int NOT NULL, \`activePowerW\` int NOT NULL, \`incomingPowerFromPanelsW\` int NOT NULL, \`consumedPowerPercent\` varchar(255) NOT NULL, \`busVoltageV\` int NOT NULL, \`batteryChargeCurrentA\` int NOT NULL, \`inverterTemperatureCelsius\` int NOT NULL, \`panelsVoltageV\` int NOT NULL, \`batteryVoltageFromPanelsV\` int NOT NULL, \`batteryDischargeCurrentA\` int NOT NULL, \`batteryVoltagePercentage\` varchar(255) NOT NULL, \`batteryVoltage\` int NOT NULL, \`computerVoltage\` int NOT NULL, \`consumedCurrent\` int NOT NULL, \`incomingCurrentFromPanels\` int NOT NULL, \`consumedCurrentFromBattery\` int NOT NULL, \`inverterId\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`setting\` (\`id\` varchar(36) NOT NULL, \`isManualMode\` tinyint NOT NULL DEFAULT 0, \`scvp\` int NOT NULL, \`sasmwol\` int NOT NULL, \`sasmwlv\` int NOT NULL, \`inverterId\` varchar(255) NOT NULL, UNIQUE INDEX \`REL_06579b8ae23c3c7f7d05f5fae2\` (\`inverterId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD \`actualUpdateDate\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD \`piority\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inverter_log\` ADD CONSTRAINT \`FK_d296ca75b10a7cf5b81ccf2e209\` FOREIGN KEY (\`inverterId\`) REFERENCES \`inverter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`setting\` ADD CONSTRAINT \`FK_06579b8ae23c3c7f7d05f5fae27\` FOREIGN KEY (\`inverterId\`) REFERENCES \`inverter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD CONSTRAINT \`FK_4e96a9ed6ee408e5de3f00b83b5\` FOREIGN KEY (\`inverterId\`) REFERENCES \`inverter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device\` DROP FOREIGN KEY \`FK_4e96a9ed6ee408e5de3f00b83b5\``);
        await queryRunner.query(`ALTER TABLE \`setting\` DROP FOREIGN KEY \`FK_06579b8ae23c3c7f7d05f5fae27\``);
        await queryRunner.query(`ALTER TABLE \`inverter_log\` DROP FOREIGN KEY \`FK_d296ca75b10a7cf5b81ccf2e209\``);
        await queryRunner.query(`ALTER TABLE \`device\` DROP COLUMN \`piority\``);
        await queryRunner.query(`ALTER TABLE \`device\` DROP COLUMN \`actualUpdateDate\``);
        await queryRunner.query(`ALTER TABLE \`device\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`DROP INDEX \`REL_06579b8ae23c3c7f7d05f5fae2\` ON \`setting\``);
        await queryRunner.query(`DROP TABLE \`setting\``);
        await queryRunner.query(`DROP TABLE \`inverter_log\``);
    }

}
