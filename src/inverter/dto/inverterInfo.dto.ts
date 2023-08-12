import { AddDeviceDto, DeviceStatus } from "src/device/device.dto";

export class Information {
  inverterId: string // ID
  gridFrequencyHz: number; //تردّد كهرباء الشركة(هرتز)
  inverterOutputVoltageV: number; // جهد خرج الأنفرتر(فولت) 
  inverterOutputFrequencyHz: number; //تردّد خرج الأنفرتر(هرتز)
  apparentPowerVA: number; // الاستطاعة الظاهريّة المستهلكة(فولت_أمبير)
  activePowerW: number; //الاستطاعة الفعّالة المستهلكة(واط)
  incomingPowerFromPanelsW: number; // الأستطاعة القادمة من الألواح(واط)
  consumedPowerPercent: string; // النسبة المئويّة للاستطاعة المستهلكة
  busVoltageV: number; // جهد الممرّ(فولت)
  batteryChargeCurrentA: number; // تيّار شحن البطارية(أمبير)
  inverterTemperatureCelsius: number; // درجة حرارة الأنفرتر(سلسيوس)
  panelsVoltageV: number; // جهد الألواح(فولت)
  batteryVoltageFromPanelsV: number; // جهد البطاريّة من الألواح(فولت) 
  batteryDischargeCurrentA: number; // تيّار تفريغ البطاريّة(أمبير)

  batteryVoltagePercentage: string; //النسبة المئويّة لجهد البطارية 
  batteryVoltage: number;//  جهد البطارية فولت
  computerVoltage: number; // جهد الشركة
  consumedCurrent: number; // التيار المستهلك من الالواح
  consumedCurrentFromBattery: number; // التيار المستهلك من البطاريات
  incomingCurrentFromPanels: number; // التيار القادم من الالواح

  devicesStatus: DeviceStatus[]

}





export class GeneralInformation {
  batteryVoltagePercentage: string; //النسبة المئويّة لجهد البطارية 
  batteryVoltage: number;//  جهد البطارية فولت
  computerVoltage: number; // جهد الشركة
  consumedCurrent: number; // التيار المستهلك من الالواح
  consumedCurrentFromBattery: number; // التيار المستهلك من البطاريات
  incomingCurrentFromPanels: number; // التيار القادم من الالواح
}

export class InverterInformation {

  gridFrequencyHz: number; //تردّد كهرباء الشركة(هرتز)
  inverterOutputVoltageV: number; // جهد خرج الأنفرتر(فولت) 
  inverterOutputFrequencyHz: number; //تردّد خرج الأنفرتر(هرتز)
  apparentPowerVA: number; // الاستطاعة الظاهريّة المستهلكة(فولت_أمبير)
  activePowerW: number; //الاستطاعة الفعّالة المستهلكة(واط)
  incomingPowerFromPanelsW: number; // الأستطاعة القادمة من الألواح(واط)
  consumedPowerPercent: string; // النسبة المئويّة للاستطاعة المستهلكة
  busVoltageV: number; // جهد الممرّ(فولت)
  batteryChargeCurrentA: number; // تيّار شحن البطارية(أمبير)
  inverterTemperatureCelsius: number; // درجة حرارة الأنفرتر(سلسيوس)
  panelsVoltageV: number; // جهد الألواح(فولت)
  batteryVoltageFromPanelsV: number; // جهد البطاريّة من الألواح(فولت) 
  batteryDischargeCurrentA: number; // تيّار تفريغ البطاريّة(أمبير)

}


export class GetInformation {
  inverterId: string;

  generalInformation: GeneralInformation;
  inverterInformation: InverterInformation;

  devicesInformation: Omit<AddDeviceDto, 'inverterId'>[]


}