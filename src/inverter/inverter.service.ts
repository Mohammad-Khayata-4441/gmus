import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InverterLog } from './entities/inverterLogs.entity';
import { InverterInformation } from './dto/inverterInfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AddInverterDto } from './dto/addInverter.dto';
import { Inverter } from './entities/inverter.entity';

@Injectable()
export class InverterService {

    constructor(
        @InjectRepository(InverterLog) private inverterLog: Repository<InverterLog>,
        @InjectRepository(Inverter) private InverterRepo: Repository<Inverter>
    ) { }

    newLog = async (log: InverterInformation) => {

        const newLog = this.inverterLog.create({
            inverterId: log.inverterId,
            ...log
        })
        await this.inverterLog.save(newLog)

        return newLog

    }


    newInverter = async (inverterInfo: AddInverterDto) => {


        const instance = this.InverterRepo.create({
            ...inverterInfo
        })


        await this.InverterRepo.save(instance)

        return instance
    }


    fetch = async () => {
        return this.InverterRepo.find();
    }


    getLogs = async () => {
        return this.inverterLog.find()
    }


    getLast = async (inverterId: string) => {
        const results = await this.inverterLog.find({
            where: { inverterId },
            order: { created_at: "DESC" },
            take: 1,
        })

        if (results && results.length > 0)
            return results[0]


    }




}
