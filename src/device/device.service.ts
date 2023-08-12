import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { Repository } from 'typeorm';
import { AddDeviceDto, DeviceStatus } from './device.dto';

@Injectable()
export class DeviceService {

    constructor(@InjectRepository(Device) private deviceRepo: Repository<Device>) { }

    async getInverterDevices(inverterId: string) {

        const results = await this.deviceRepo.find({
            where: {
                inverterId,
            }
        })

        return results
    }

    async addDevice(dto:AddDeviceDto) {
        const inst = this.deviceRepo.create({...dto})
        await this.deviceRepo.save(inst)
    }

    updateDevicesStatus = async (devices: DeviceStatus[]) => {

        devices.forEach(async (device) => {
            const restuls = await this.deviceRepo.createQueryBuilder().update(Device).set({
                actualUpdateDate: device.actualUpdateDate,
                isActive: device.isActive
            }).where("id = :id", { id: device.id }).execute()

            console.log(restuls);
        })

    }

}
