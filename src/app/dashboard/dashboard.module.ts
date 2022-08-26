import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImportModule } from '../import/import.module';
import {TransactionsModule} from '../transactions/transactions.module'



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, DashboardRoutingModule, ImportModule, TransactionsModule
  ]
})
export class DashboardModule { }
