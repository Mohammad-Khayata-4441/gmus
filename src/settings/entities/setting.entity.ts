import { Inverter } from "src/inverter/entities/inverter.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Setting {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: false })
    isManualMode: boolean;

    @Column()
    scvp: number
    @Column()
    sasmwol: number
    @Column()
    sasmwlv: number

    @Column({ name: 'inverterId' })
    inverterId: string


    @OneToOne(() => Inverter, I => I.settings)
    @JoinColumn({ name: 'inverterId' })
    inverter: Inverter

}
