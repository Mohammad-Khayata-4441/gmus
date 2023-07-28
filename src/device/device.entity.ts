import { Column, Entity, ManyToOne } from "typeorm";
import { Inverter } from '../inverter/entities/inverter.entity'
@Entity()
export class Device {
    @Column()
    name: string;

    @Column()
    isActive: boolean;

    @ManyToOne(() => Inverter, i => i.devices)
    inverter: Inverter
}