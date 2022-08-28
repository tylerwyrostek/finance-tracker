import { Query } from '@datorama/akita';
import { TransactionStore, TransactionState } from './transactions.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class TransactionQuery extends Query<TransactionState> {  

    allState$ = this.select();
  constructor(protected override store: TransactionStore) {
    super(store);
  }
}