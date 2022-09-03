import { Component, OnInit } from '@angular/core';
import { Finances } from 'src/app/transactions/transactions.types';
import { TransactionQuery } from 'src/app/transactions/transitions.query';
import { map } from 'rxjs';
import { PlanningQuery } from 'src/app/planning/planning.query';
import { PlannedFinances } from 'src/app/planning/planning.types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  financeData!: Finances;
  plannedFinances!: PlannedFinances;
  constructor(private transactionQuery: TransactionQuery, private planningQuery: PlanningQuery) { }

  ngOnInit(): void {
    this.getFinanceData();
  }

  private getFinanceData(): void{
    this.transactionQuery.allState$.pipe(map((results: any)=>{this.financeData = results})).subscribe();
    this.planningQuery.allState$.pipe(map((results:any)=>{this.plannedFinances = results})).subscribe();
  }

}
