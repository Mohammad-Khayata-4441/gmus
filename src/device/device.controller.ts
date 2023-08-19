import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { AddDeviceDto, DeviceStatus } from './device.dto';


@ApiTags('Device')
@Controller('device')
export class DeviceController {

    constructor(private deviceService: DeviceService) { }


    @Post('addDevice')
    createDeviceForInverter(@Body() dto: AddDeviceDto) {

        return this.deviceService.addDevice(dto)
    }

    @Get('getDevices')
    getInverterDevices(@Query('inverterId') inverterId: string) {
        return this.deviceService.getInverterDevices(inverterId)
    }

    @Put(':deviceId')
    updateDeviceStatus(@Body() payload:DeviceStatus) {
        return this.deviceService.updateDevicesStatus([payload])
    }
}
