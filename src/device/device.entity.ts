import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Inverter } from '../inverter/entities/inverter.entity'
@Entity()
export class Device {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

    @Column({name:'inverterId'})
    inverterId:string

    @ManyToOne(() => Inverter, i => i.devices)
    @JoinColumn({name:'inverterId'})
    inverter: Inverter
}