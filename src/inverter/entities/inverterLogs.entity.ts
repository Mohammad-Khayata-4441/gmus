import { Device } from 'src/device/device.entity';
import { Entity, Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Inverter } from './inverter.entity';

@Entity()
export class InverterLog {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    gridFrequencyHz: number;

    @Column()
    inverterOutputVoltageV: number;

    @Column()
    inverterOutputFrequencyHz: number;

    @Column()
    apparentPowerVA: number;

    @Column()
    activePowerW: number;

    @Column()
    incomingPowerFromPanelsW: number;

    @Column()
    consumedPowerPercent: string;

    @Column()
    busVoltageV: number;

    @Column()
    batteryChargeCurrentA: number;

    @Column()
    inverterTemperatureCelsius: number;

    @Column()
    panelsVoltageV: number;

    @Column()
    batteryVoltageFromPanelsV: number;

    @Column()
    batteryDischargeCurrentA: number;

    @Column()
    batteryVoltagePercentage: string;

    @Column()
    batteryVoltage: number;

    @Column()
    computerVoltage: number;

    @Column()
    consumedCurrent: number;

    @Column()
    incomingCurrentFromPanels: number;

    @Column()
    consumedCurrentFromBattery: number;

    @ManyToOne(() => Inverter, i => i.logs)
    inverter: Inverter

}