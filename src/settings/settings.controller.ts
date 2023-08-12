import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) { }

  @Post(':id')
  create(@Param('inverterId') inverterId:string, @Body() createSettingDto: UpdateSettingDto) {
    return this.settingsService.create(inverterId, createSettingDto);
  }

 
  @Get(':inverterId')
  findOne(@Param('inverterId') id: string) {
    return this.settingsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.update(id, updateSettingDto);
  }


}
