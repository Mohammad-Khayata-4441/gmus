import { Injectable } from '@nestjs/common';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingsService {

  constructor(@InjectRepository(Setting) private settingsRepo: Repository<Setting>) {

  }


  async create(inverterId, updateSettingDto: UpdateSettingDto) {
    const inst = this.settingsRepo.create({
      inverterId,
      ...updateSettingDto
    })

    await this.settingsRepo.save(inst)

    return inst;
  }

  findOne(inverterId: string) {
    return this.settingsRepo.findOne({
      where: {
        inverterId
      }
    })
    // return `This action returns a #${id} setting`;
  }

  async update(inverterId: string, updateSettingDto: UpdateSettingDto) {
    const queryBuilder =  this.settingsRepo.createQueryBuilder()
     await queryBuilder.update({
      ...updateSettingDto
    }).where("inverterId = :inverterId", { inverterId }).execute()


  }

}
