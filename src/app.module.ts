import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';
import { InverterModule } from './inverter/inverter.module';

@Module({
  imports: [UserModule, DeviceModule, InverterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
