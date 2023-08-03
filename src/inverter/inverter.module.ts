import { Module } from '@nestjs/common';
import { InverterController } from './inverter.controller';
import { InverterService } from './inverter.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Inverter } from './entities/inverter.entity';
import { InverterLog } from './entities/inverterLogs.entity';

@Module({
  controllers: [InverterController],
  providers: [InverterService ],
  imports:[TypeOrmModule.forFeature([Inverter,InverterLog])]
})
export class InverterModule {}
