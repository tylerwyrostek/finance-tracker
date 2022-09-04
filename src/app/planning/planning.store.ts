import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ExpectedIncome, PlannedExpense } from './planning.types';
import { Observable } from 'rxjs';

export interface PlanningState{
  expectedIncome: ExpectedIncome[],
  month: string | null,
  needExpenses: PlannedExpense[],
    wantExpenses: PlannedExpense[],
    savingExpenses: PlannedExpense[]
}

export function createInitialState(): PlanningState {
  return {
    expectedIncome: [],
    month: null,
    needExpenses: [],
    wantExpenses: [],
    savingExpenses: []
  }
}
@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'planning' })
export class PlanningStore extends Store<PlanningState> {
  constructor() {
    super(createInitialState());
  }
}