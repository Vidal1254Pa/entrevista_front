import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ResponseGeneral from '../models/response_general';
import Company from '../models/company';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseService="vehicles/"

  constructor(private readonly http: HttpClient) { }

  getVehicles() {
    return this.http.get<ResponseGeneral<Company>>(`${this.baseService}getallmanufacturers?format=json`);
  }
}
