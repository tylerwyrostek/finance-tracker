import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanIncomeFormComponent } from '../plan-income-form/plan-income-form.component';
import { PlanningStore } from '../planning.store';
import { PlanningQuery } from '../planning.query';
import { ExpenseTypes } from '../planning.types';

@Component({
  selector: 'app-planning-container',
  templateUrl: './planning-container.component.html',
  styleUrls: ['./planning-container.component.css']
})
export class PlanningContainerComponent implements OnInit {
  @ViewChild(PlanIncomeFormComponent)
  private planFormComponent: PlanIncomeFormComponent = new PlanIncomeFormComponent(new PlanningStore, new PlanningQuery(new PlanningStore));
  constructor(private planningStore: PlanningStore) { }
  EXPENSE_TYPES = ExpenseTypes;
  ngOnInit(): void {
    
  }

  public addIncome():void {
    var _res = JSON.parse(JSON.stringify(this.planningStore.getValue().expectedIncome))
    _res.push({Income: 0, Index: _res.length});

    this.planningStore.update({expectedIncome: _res});
  }

}
