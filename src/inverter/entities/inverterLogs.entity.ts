import { Device } from 'src/device/device.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Inverter } from './inverter.entity';

@Entity()
export class InverterLog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @Column({name:'inverterId'})
    inverterId:string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;


    @ManyToOne(() => Inverter, i => i.logs)
    @JoinColumn({name:'inverterId'})
    inverter: Inverter

    

}