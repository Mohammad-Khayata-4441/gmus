import { Module } from '@nestjs/common';
import { InverterController } from './inverter.controller';
import { InverterService } from './inverter.service';

@Module({
  controllers: [InverterController],
  providers: [InverterService]
})
export class InverterModule {}
