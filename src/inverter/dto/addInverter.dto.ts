import { AddDeviceDto } from "src/device/device.dto"
import { UpdateSettingDto } from "src/settings/dto/update-setting.dto"

export class AddInverterDto {
    password: string
    customerName: string
    customerLocation: string
    customerPhoneNumber: string
    devices: AddDeviceDto[]= [{
        isActive:false,
        name:"البراد",
        piority:1,
        actualUpdateDate:new Date()
    }]
    settings: UpdateSettingDto  = new UpdateSettingDto()
}