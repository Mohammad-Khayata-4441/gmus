import { MigrationInterface, QueryRunner } from "typeorm";

export class Postgres1692404366233 implements MigrationInterface {
    name = 'Postgres1692404366233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inverter_log" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "gridFrequencyHz" integer NOT NULL, "inverterOutputVoltageV" integer NOT NULL, "inverterOutputFrequencyHz" integer NOT NULL, "apparentPowerVA" integer NOT NULL, "activePowerW" integer NOT NULL, "incomingPowerFromPanelsW" integer NOT NULL, "consumedPowerPercent" character varying NOT NULL, "busVoltageV" integer NOT NULL, "batteryChargeCurrentA" integer NOT NULL, "inverterTemperatureCelsius" integer NOT NULL, "panelsVoltageV" integer NOT NULL, "batteryVoltageFromPanelsV" integer NOT NULL, "batteryDischargeCurrentA" integer NOT NULL, "batteryVoltagePercentage" character varying NOT NULL, "batteryVoltage" integer NOT NULL, "computerVoltage" integer NOT NULL, "consumedCurrent" integer NOT NULL, "incomingCurrentFromPanels" integer NOT NULL, "consumedCurrentFromBattery" integer NOT NULL, "inverterId" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_65f806c8a81b45dd8f4e1e3780f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setting" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isManualMode" boolean NOT NULL DEFAULT false, "scvp" integer NOT NULL, "sasmwol" integer NOT NULL, "sasmwlv" integer NOT NULL, "inverterId" uuid NOT NULL, CONSTRAINT "REL_06579b8ae23c3c7f7d05f5fae2" UNIQUE ("inverterId"), CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inverter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "inverterNumber" SERIAL NOT NULL, "password" character varying NOT NULL, "customerName" character varying NOT NULL, "customerLocation" character varying NOT NULL, "customerPhoneNumber" character varying NOT NULL, CONSTRAINT "UQ_67f328002913a2bfbe02f645586" UNIQUE ("inverterNumber"), CONSTRAINT "PK_91634da4d6c56d802396b25ec0e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "device" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "actualUpdateDate" TIMESTAMP, "name" character varying NOT NULL, "isActive" boolean NOT NULL, "inverterId" uuid NOT NULL, "piority" integer NOT NULL, CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("userName" character varying NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "inverter_log" ADD CONSTRAINT "FK_d296ca75b10a7cf5b81ccf2e209" FOREIGN KEY ("inverterId") REFERENCES "inverter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_06579b8ae23c3c7f7d05f5fae27" FOREIGN KEY ("inverterId") REFERENCES "inverter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "device" ADD CONSTRAINT "FK_4e96a9ed6ee408e5de3f00b83b5" FOREIGN KEY ("inverterId") REFERENCES "inverter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device" DROP CONSTRAINT "FK_4e96a9ed6ee408e5de3f00b83b5"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_06579b8ae23c3c7f7d05f5fae27"`);
        await queryRunner.query(`ALTER TABLE "inverter_log" DROP CONSTRAINT "FK_d296ca75b10a7cf5b81ccf2e209"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "device"`);
        await queryRunner.query(`DROP TABLE "inverter"`);
        await queryRunner.query(`DROP TABLE "setting"`);
        await queryRunner.query(`DROP TABLE "inverter_log"`);
    }

}
