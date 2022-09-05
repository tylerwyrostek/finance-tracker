import { Component, OnInit } from '@angular/core';
import { PlanningQuery } from '../planning.query';
import { ExpensePercents, PlannedFinances } from '../planning.types';
import { map } from 'rxjs';

@Component({
  selector: 'app-planning-percentage-form',
  templateUrl: './planning-percentage-form.component.html',
  styleUrls: ['./planning-percentage-form.component.css']
})
export class PlanningPercentageFormComponent implements OnInit {
  percents: ExpensePercents = {
    needs: 0,
    wants: 0,
    savings: 0
  };
  plannedData! : PlannedFinances;
  constructor(private planningQuery: PlanningQuery) { }

  ngOnInit(): void {
    this.getPlanningData();
  }

  private getPlanningData():void{
    this.planningQuery.allState$.pipe(
      map(results =>{
        this.plannedData = results;
        this.calculatePercents();
      })
    ).subscribe();
  }

  private calculatePercents(){
    var needsTotal = 0;
    var wantsTotal =0;
    var savingsTotal = 0;
    var incomeTotal = 0;

    this.plannedData.needExpenses.forEach(needs=>{
      needsTotal += needs.expenseTotal;
    });

    this.plannedData.wantExpenses.forEach(wants=>{
      wantsTotal += wants.expenseTotal;
    });

    this.plannedData.savingExpenses.forEach(savings=>{
      savingsTotal += savings.expenseTotal;
    });

    this.plannedData.expectedIncome.forEach(income=>{
      incomeTotal += income.Income;
    })

    this.percents.needs = (needsTotal/incomeTotal);
    this.percents.wants = (wantsTotal/incomeTotal);
    this.percents.savings = (savingsTotal/incomeTotal);

  }

}
