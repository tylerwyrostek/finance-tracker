import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {TransactionsModule} from '../transactions/transactions.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FinanceWidgetComponent } from './finance-widget/finance-widget.component'



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    FinanceWidgetComponent
  ],
  imports: [
    CommonModule, DashboardRoutingModule, TransactionsModule
  ],
  exports:[NavbarComponent]
})
export class DashboardModule { }
