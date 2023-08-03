export class InverterInformation {
  inverterId:string
  gridFrequencyHz: number;
  inverterOutputVoltageV: number;
  inverterOutputFrequencyHz: number;
  apparentPowerVA: number;
  activePowerW: number;
  incomingPowerFromPanelsW: number;
  consumedPowerPercent: string;
  busVoltageV: number;
  batteryChargeCurrentA: number;
  inverterTemperatureCelsius: number;
  panelsVoltageV: number;
  batteryVoltageFromPanelsV: number;
  batteryDischargeCurrentA: number;
  batteryVoltagePercentage: string;
  batteryVoltage: number;
  computerVoltage: number;
  consumedCurrent: number;
  incomingCurrentFromPanels: number;
  consumedCurrentFromBattery: number;
}