import { Component, OnInit } from '@angular/core';
import { TransactionStore } from '../transactions.store';
import { Transaction } from '../transactions.types';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  userTransactions: Transaction[] = [];
  constructor(private transactionStore: TransactionStore) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions(): void{
     ;
    console.log(this.transactionStore.getValue());
  }

}
