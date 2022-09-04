import { Component, Input, OnInit } from '@angular/core';
import { PlannedFinances } from 'src/app/planning/planning.types';

@Component({
  selector: 'app-finance-widget',
  templateUrl: './finance-widget.component.html',
  styleUrls: ['./finance-widget.component.css']
})
export class FinanceWidgetComponent implements OnInit {
  @Input() depositTotal: number = 0;
  @Input() withdrawalTotal: number = 0;
  @Input() plannedFinances!: PlannedFinances;
  plannedIncomeTotal: number = 0;
  plannedExpenseTotal: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.calculatePlannedIncome();
    this.calculateExpenses();
  }

  private calculatePlannedIncome(): void{
    this.plannedFinances.expectedIncome.forEach(income =>{
      this.plannedIncomeTotal  += income.Income;
    })

    console.log(this.plannedIncomeTotal);
  }

  private calculateExpenses(): void{
    //needs
    this.plannedFinances.needExpenses.forEach(need =>{
      this.plannedExpenseTotal += need.expenseTotal;
    })
    //wants
    this.plannedFinances.wantExpenses.forEach(want =>{
      this.plannedExpenseTotal += want.expenseTotal;
    })
    //savings
    this.plannedFinances.savingExpenses.forEach(saving =>{
      this.plannedExpenseTotal += saving.expenseTotal;
    })
  }

}
