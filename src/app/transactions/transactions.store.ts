import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Transaction } from './transactions.types';
import { Observable } from 'rxjs';



export function createInitialState(): Transaction[] {
  return [{    amount: '',
  description: '',
  trasnactionType: '',
  date: '',
  sortingType: '',
  sortingSubType: ''}]
}
@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'transaction' })
export class TransactionStore extends Store<Transaction[]> {
  constructor() {
    super(createInitialState());
  }

  public getTransactions():Transaction[]{
      return this.getValue();
  }
}