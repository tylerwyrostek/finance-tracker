import { Query } from '@datorama/akita';
import { PlanningState, PlanningStore } from './planning.store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PlanningQuery extends Query<PlanningState> {  

    allState$ = this.select();
  constructor(protected override store: PlanningStore) {
    super(store);
  }
}