import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CompanyService } from './service/company.service';
import Company from './models/company';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CardModule, ButtonModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  vehiclesByCompany: Company[] = [];

  constructor(private readonly companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getVehicles().subscribe({
      next: (response) => {
        this.vehiclesByCompany = response.Results;
      },
      error: (error) => {
        console.error('Error fetching vehicles:', error);
      },
    });
  }
}
