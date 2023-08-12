import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Inverter } from '../inverter/entities/inverter.entity'
@Entity()
export class Device {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public updatedAt: Date

    @Column({ nullable: true })
    actualUpdateDate: Date

    @Column()
    name: string;

    @Column()
    isActive: boolean;

    @Column({ name: 'inverterId' })
    inverterId: string

    @Column()
    piority: number

    @ManyToOne(() => Inverter, i => i.devices)
    @JoinColumn({ name: 'inverterId' })
    inverter: Inverter
}