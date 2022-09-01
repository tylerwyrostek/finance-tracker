import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ExpectedIncome } from './planning.types';
import { Observable } from 'rxjs';

export interface PlanningState{
  expectedIncome: ExpectedIncome[],
  month: string | null
}

export function createInitialState(): PlanningState {
  return {
    expectedIncome: [],
    month: null
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