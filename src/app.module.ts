import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';
import { InverterModule } from './inverter/inverter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingsModule } from './settings/settings.module';
import { EventGateway } from './event.gateway';
import { ConfigModule, ConfigService } from '@nestjs/config'
import dbConfig from './config/db.config'
@Module({
  imports: [

    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],


    }), 

    
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log(await configService.get('database'))
        return { ...await configService.get('database') }
      },
      inject: [ConfigService],
    }),


    
    
    
    UserModule, DeviceModule, InverterModule, SettingsModule,],
  controllers: [AppController],
  providers: [AppService, EventGateway],
})
export class AppModule { }
