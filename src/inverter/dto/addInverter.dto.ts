import { AddDeviceDto } from "src/device/device.dto"

export class AddInverterDto {
    password: string
    customerName: string
    customerLocation: string
    customerPhoneNumber: string
    devices: Omit<AddDeviceDto, 'InverterId'>[]
}