import VehicleType from "./vehicles";

export default interface Company {
  Country: string;
  Mfr_CommonName: null | string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleType[];
}