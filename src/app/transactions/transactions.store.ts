import { Store, StoreConfig } from '@datorama/akita';

export interface TransactionState {
   amount: string;
   description: string;
   type: string;
   date: string;
}

export function createInitialState(): TransactionState[] {
  return [{    amount: '',
  description: '',
  type: '',
  date: ''}]
}

@StoreConfig({ name: 'transaction' })
export class TransactionStore extends Store<TransactionState[]> {
  constructor() {
    super(createInitialState());
  }
}