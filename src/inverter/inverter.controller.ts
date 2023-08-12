import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { Information } from './dto/inverterInfo.dto';
import { ApiTags } from '@nestjs/swagger';
import { InverterService } from './inverter.service';
import { AddInverterDto } from './dto/addInverter.dto';

@ApiTags('Inverter')
@Controller('inverter')
export class InverterController {

    constructor(private inverterService: InverterService) { }

    @Post('information')
    setInverterInformation(@Body() payload: Information) {
        return this.inverterService.newLog(payload)
    }

    @Post()
    addInverter(@Body() data: AddInverterDto) {
        return this.inverterService.newInverter(data)
    }


    @Get()
    fetch() {
        return this.inverterService.fetch()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.inverterService.findOne(id)
    }

    // @Get('log')
    // getLog() {
    //     return this.inverterService.getLogs()
    // }

    @Get('information/:inverterId')
    getLast(@Param('inverterId') inverterId: string) {
        return this.inverterService.getLast(inverterId)
    }


}
