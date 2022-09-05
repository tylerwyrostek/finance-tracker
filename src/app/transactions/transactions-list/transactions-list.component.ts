import { Component, OnInit } from '@angular/core';
import { TransactionQuery} from '../transitions.query'
import { Transaction } from '../transactions.types';
import { map } from 'rxjs';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  userTransactions: Transaction[] = [];
  constructor(private transactionQuery: TransactionQuery) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions(): void{
    this.transactionQuery.allState$.pipe(map(results=>{this.userTransactions = results.transactions})).subscribe();
  }

}
