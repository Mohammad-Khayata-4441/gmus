import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { AddDeviceDto } from './device.dto';


@ApiTags('Device')
@Controller('device')
export class DeviceController {

    constructor(private deviceService: DeviceService) { }


    @Post('addDevice')
    createDeviceForInverter(@Body() dto: AddDeviceDto) {

        return this.deviceService.addDevice(dto)
    }

    @Get()
    getInverterDevices(@Query('inverterId') inverterId: string) {

        return this.deviceService.getInverterDevices(inverterId)
    }
}
