import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Transaction } from './transactions.types';
import { Observable } from 'rxjs';

export interface TransactionState{
  transactions: Transaction[]
}

export function createInitialState(): TransactionState {
  return {transactions: []}
}
@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'transaction' })
export class TransactionStore extends Store<TransactionState> {
  constructor() {
    super(createInitialState());
  }
}