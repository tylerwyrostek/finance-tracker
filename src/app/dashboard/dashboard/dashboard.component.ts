import { Component, OnInit } from '@angular/core';
import { Finances } from 'src/app/transactions/transactions.types';
import { TransactionQuery } from 'src/app/transactions/transitions.query';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  financeData!: Finances;
  constructor(private transactionQuery: TransactionQuery) { }

  ngOnInit(): void {
    this.getFinanceData();
  }

  private getFinanceData(): void{
    this.transactionQuery.allState$.pipe(map((results: any)=>{this.financeData = results})).subscribe();
    console.log(this.financeData);
  }

}
