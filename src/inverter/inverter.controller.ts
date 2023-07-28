import { Controller, Post, Body } from '@nestjs/common';
import { InverterInformation } from './dto/inverterInfo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Inverter')
@Controller('inverter')
export class InverterController {
    @Post('information')
    setInverterInformation(@Body() payload: InverterInformation) {
        console.log(payload)
    }
    

}
