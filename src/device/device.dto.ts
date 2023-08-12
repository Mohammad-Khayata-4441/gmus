export class AddDeviceDto {
    inverterId?: string
    isActive: boolean
    actualUpdateDate: Date
    piority: number;
    name: string
}


export class DeviceStatus {
    id: string
    isActive:boolean
    actualUpdateDate: Date
}