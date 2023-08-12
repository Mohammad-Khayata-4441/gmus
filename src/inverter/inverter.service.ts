import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InverterLog } from './entities/inverterLogs.entity';
import { Information } from './dto/inverterInfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AddInverterDto } from './dto/addInverter.dto';
import { Inverter } from './entities/inverter.entity';
import { Device } from 'src/device/device.entity';
import { DeviceService } from 'src/device/device.service';
import { SettingsService } from 'src/settings/settings.service';

@Injectable()
export class InverterService {

    constructor(
        @InjectRepository(InverterLog) private inverterLog: Repository<InverterLog>,
        @InjectRepository(Inverter) private InverterRepo: Repository<Inverter>,
        @InjectRepository(Device) private Devicerepo: Repository<Device>,
        private deviceService: DeviceService,
        private settingsService: SettingsService

    ) { }

    newLog = async (log: Information) => {

        const { devicesStatus, ...rest } = log

        const newLog = this.inverterLog.create({
            ...rest,
        })

        await this.inverterLog.save(newLog)



        await this.deviceService.updateDevicesStatus(devicesStatus)

        const inverterSettings = this.settingsService.findOne(log.inverterId);
        const deviceStatus = this.deviceService.getInverterDevices(log.inverterId)

        return { deviceStatus, inverterSettings };




    }


    newInverter = async (inverterInfo: AddInverterDto) => {


        const instance = this.InverterRepo.create({
            ...inverterInfo
        })

        await this.InverterRepo.save(instance)


        // TODO Move Device Service"
        inverterInfo.devices.forEach(async (device) => {
            const newDevice = this.Devicerepo.create({ ...device, inverterId: instance.id })
            await this.Devicerepo.save(newDevice)
        })


        return instance
    }

    fetch = async () => {
        return this.InverterRepo.find();
    }

    findOne = async (id: string) => {
        return this.InverterRepo.findOne({ where: { id }, relations: { devices: true ,settings:true} })
    }


    getLogs = async () => {
        return this.inverterLog.find()
    }

    getLast = async (inverterId: string) => {

        const results = await this.inverterLog.findOne({
            where: { inverterId },
            order: { created_at: "DESC" },
        })

        return results;

    }

}
