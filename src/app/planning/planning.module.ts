import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningContainerComponent } from './planning-container/planning-container.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanIncomeFormComponent } from './plan-income-form/plan-income-form.component';
import { FormsModule } from '@angular/forms';
import { PlanExpensesFormComponent } from './plan-expenses-form/plan-expenses-form.component';


@NgModule({
  declarations: [
    PlanningContainerComponent,
    PlanIncomeFormComponent,
    PlanExpensesFormComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    FormsModule
  ]
})
export class PlanningModule { }
