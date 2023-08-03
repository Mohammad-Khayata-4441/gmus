import { Device } from 'src/device/device.entity';
import { Entity, OneToMany, Column, PrimaryGeneratedColumn } from 'typeorm';
import { InverterLog } from "src/inverter/entities/inverterLogs.entity";

@Entity()
export class Inverter {

  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({ generated: "increment", primary: false, unique: true })
  inverterNumber: number

  @Column()
  password: string


  @Column()
  customerName: string;

  @Column()
  customerLocation: string

  @Column()
  customerPhoneNumber: string


  @OneToMany(() => Device, d => d.inverter)
  devices: Device[]

  @OneToMany(() => InverterLog, il => il.inverter)
  logs: InverterLog[]


}