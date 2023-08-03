import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { InverterInformation } from './dto/inverterInfo.dto';
import { ApiTags } from '@nestjs/swagger';
import { InverterService } from './inverter.service';
import { AddInverterDto } from './dto/addInverter.dto';

@ApiTags('Inverter')
@Controller('inverter')
export class InverterController {

    constructor(private inverterService: InverterService) { }


    @Post('information')
    setInverterInformation(@Body() payload: InverterInformation) {
        return this.inverterService.newLog(payload)
    }

    @Post('new')
    addInverter(@Body() data: AddInverterDto) {
        return this.inverterService.newInverter(data)
    }


    @Get()
    fetch() {
        return this.inverterService.fetch()
    }

    @Get('log')
    getLog() {
        return this.inverterService.getLogs()
    }

    @Get('getLast')
    getLast(@Query('inverterId') inverterId: string) {
        return this.inverterService.getLast(inverterId)
    }


}
