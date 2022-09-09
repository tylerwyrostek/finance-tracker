import { Component, OnInit } from '@angular/core';
import { TransactionQuery} from '../transitions.query';
import { TransactionStore } from '../transactions.store';
import { Transaction } from '../transactions.types';
import { map } from 'rxjs';
import { ExpenseTypes, PlannedExpense, PlannedFinances } from 'src/app/planning/planning.types';
import { PlanningQuery } from 'src/app/planning/planning.query';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  userTransactions: Transaction[] = [];
  plannedFinances!: PlannedFinances;
  constructor(private transactionQuery: TransactionQuery, private transactionStore: TransactionStore, private planningQuery: PlanningQuery) { }
  EXPENSE_TYPES = ExpenseTypes;
  ngOnInit(): void {
    this.getTransactions();
    this.getSubtypeArrays();
  }

  private getTransactions(): void{
    this.transactionQuery.allState$.pipe(map(results=>{this.userTransactions = JSON.parse(JSON.stringify(results.transactions));})).subscribe();
  }

  public deleteTransaction(transaction: Transaction){
    var updatedTransactions = this.userTransactions.filter(x=> x!==transaction);
    this.transactionStore.update({transactions: updatedTransactions})
  }

  public planningTypeChange(transaction: Transaction){
    console.log(transaction);
    this.transactionStore.update({transactions: this.userTransactions})
  }

  private getSubtypeArrays(): void{
    this.planningQuery.allState$.pipe(map(results=>{this.plannedFinances = results})).subscribe();
  }


}
