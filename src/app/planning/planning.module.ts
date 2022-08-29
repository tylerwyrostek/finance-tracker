import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningContainerComponent } from './planning-container/planning-container.component';
import { PlanningRoutingModule } from './planning-routing.module';



@NgModule({
  declarations: [
    PlanningContainerComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
