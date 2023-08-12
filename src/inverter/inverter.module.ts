import { Module } from '@nestjs/common';
import { InverterController } from './inverter.controller';
import { InverterService } from './inverter.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Inverter } from './entities/inverter.entity';
import { InverterLog } from './entities/inverterLogs.entity';
import { Device } from 'src/device/device.entity';
import { SettingsModule } from 'src/settings/settings.module';
import { DeviceModule } from 'src/device/device.module';

@Module({
  controllers: [InverterController],
  providers: [InverterService  ],
  imports:[TypeOrmModule.forFeature([Inverter,InverterLog,Device]) , SettingsModule, DeviceModule]
})
export class InverterModule {}
