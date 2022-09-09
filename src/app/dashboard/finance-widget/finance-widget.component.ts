import { Component, Input, OnInit } from '@angular/core';
import { PlannedFinances } from 'src/app/planning/planning.types';
import { Transaction, TransactionTypes } from 'src/app/transactions/transactions.types';

@Component({
  selector: 'app-finance-widget',
  templateUrl: './finance-widget.component.html',
  styleUrls: ['./finance-widget.component.css']
})
export class FinanceWidgetComponent implements OnInit {
  depositTotal: number = 0;
  withdrawalTotal: number = 0;
  @Input() plannedFinances!: PlannedFinances;
  @Input() transactions!: Transaction[]; 
  plannedIncomeTotal: number = 0;
  plannedExpenseTotal: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.calculateTotals();
    this.calculatePlannedIncome();
    this.calculateExpenses();
  }

  private calculatePlannedIncome(): void{
    this.plannedFinances.expectedIncome.forEach(income =>{
      this.plannedIncomeTotal  += income.Income;
    })
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

  private calculateTotals(): void{
    this.transactions.forEach((transaction: any) => {
      if(transaction.Type === TransactionTypes.Withdrawal){
        this.withdrawalTotal += +transaction.Amount;
      }else if(transaction.Type === TransactionTypes.Deposit){
        this.depositTotal += +transaction.Amount;
      }
    });
  }

}
