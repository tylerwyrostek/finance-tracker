import { Component, Input, OnInit } from '@angular/core';
import { ExpenseTypes, PlannedExpense } from '../planning.types';
import { PlanningStore } from '../planning.store';
import { PlanningQuery } from '../planning.query';
import { map } from 'rxjs';

@Component({
  selector: 'app-plan-expenses-form',
  templateUrl: './plan-expenses-form.component.html',
  styleUrls: ['./plan-expenses-form.component.css']
})
export class PlanExpensesFormComponent implements OnInit {
  @Input() type!: ExpenseTypes;
  userExpenses: PlannedExpense[] = [];
  total: number = 0;
  constructor(private planningStore: PlanningStore, private planningQuery: PlanningQuery) { }

  ngOnInit(): void {
    this.getExpenses();
    
  }
  

  public addExpense(expense: PlannedExpense):void{

    switch(this.type){
      case ExpenseTypes.Need:
        var _res = JSON.parse(JSON.stringify(this.planningStore.getValue().needExpenses))
        _res.push({expenseName: 'New Expense', expenseTotal: 0});
    
        this.planningStore.update({needExpenses: _res});
        break;
      case ExpenseTypes.Want:
        var _res = JSON.parse(JSON.stringify(this.planningStore.getValue().wantExpenses))
        _res.push({expenseName: 'New Expense', expenseTotal: 0});
    
        this.planningStore.update({wantExpenses: _res});
        break;
      case ExpenseTypes.Saving:
        var _res = JSON.parse(JSON.stringify(this.planningStore.getValue().savingExpenses))
        _res.push({expenseName: 'New Expense', expenseTotal: 0});
    
        this.planningStore.update({savingExpenses: _res});
        break;
      default: 
        console.error('no type that matches');
        break;
    }

  }

  public updateStore(expenses: PlannedExpense[]):void{
    switch(this.type){
      case ExpenseTypes.Need:
        this.planningStore.update({needExpenses: expenses})
        break;
      case ExpenseTypes.Want:
        this.planningStore.update({wantExpenses: expenses})
        break;
      case ExpenseTypes.Saving:
        this.planningStore.update({savingExpenses: expenses})
        break;
      default: 
        console.error('no type that matches');
        break;
    }
  }

  private updateTotal():void{
    this.total = this.userExpenses.reduce((subtotal, item) => subtotal + item.expenseTotal, 0  );
    console.log(this.total);
  }

  public deleteExpense(expense: PlannedExpense):void{
    var updatedExpenses = this.userExpenses.filter(x=> x!==expense);
    this.updateStore(updatedExpenses);
  }


  private getExpenses(): void{
    this.planningQuery.allState$.pipe(
      map(results =>{
        switch(this.type){
          case ExpenseTypes.Need:
            
            this.userExpenses = JSON.parse(JSON.stringify(results.needExpenses));
            break;
          case ExpenseTypes.Want:
            this.userExpenses = JSON.parse(JSON.stringify(results.wantExpenses));
            break;
          case ExpenseTypes.Saving:
            this.userExpenses = JSON.parse(JSON.stringify(results.savingExpenses));
            break;
          default: 
            this.userExpenses = [];
            console.error('no type that matches');
            break;
        }
        this.updateTotal();
        if(this.userExpenses.length > 0) return;

        this.addExpense({expenseName: 'New Expense', expenseTotal: 0});
      })
    ).subscribe();
  }

  public trackByFn(index: any, item: any): void {
    return index;  
  }


}
