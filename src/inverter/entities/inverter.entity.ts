import { Device } from 'src/device/device.entity';
import { Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { InverterLog } from "src/inverter/entities/inverterLogs.entity";

@Entity()
export class Inverter {
  @PrimaryColumn()
  id: number;

  

  @OneToMany(() => Device, d => d.inverter)
  devices: Device[]

  @OneToMany(() => InverterLog, il => il.inverter)
  logs: InverterLog[]


}