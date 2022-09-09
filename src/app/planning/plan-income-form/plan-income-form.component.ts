import { Component, OnInit } from '@angular/core';
import { ExpectedIncome } from '../planning.types';
import { PlanningStore } from '../planning.store';
import { PlanningQuery } from '../planning.query';
import { map } from 'rxjs';

@Component({
  selector: 'app-plan-income-form',
  templateUrl: './plan-income-form.component.html',
  styleUrls: ['./plan-income-form.component.css']
})
export class PlanIncomeFormComponent implements OnInit {
  userIncome: ExpectedIncome[] = [];
  total: number = 0;
  constructor(private planningStore: PlanningStore, private planningQuery: PlanningQuery) { }

  ngOnInit(): void {
    this.getExpectedIncome();
    
  }

  public addIncome(income: ExpectedIncome): void{
    this.userIncome.push(income);
    this.planningStore.update({expectedIncome: this.userIncome})
  }

  public updateIncome(event: any): void{
    this.planningStore.update({expectedIncome: this.userIncome});
  }

  private getExpectedIncome(): void{
    this.planningQuery.allState$.pipe(
      map(results =>{
        this.userIncome = JSON.parse(JSON.stringify(results.expectedIncome));
        this.updateTotal();
        if(this.userIncome.length > 0) return;

        this.addIncome({Income: 0, Index: 0})
      })
    ).subscribe();
  }

  private updateTotal():void{
    this.total = this.userIncome.reduce((subtotal, item) => subtotal + item.Income, 0  );
    console.log(this.total);
  }

  public deleteIncome(income: ExpectedIncome):void{
    var updatedIncome = this.userIncome.filter(x=> x!==income);
    this.planningStore.update({expectedIncome: updatedIncome})
  }

  public trackByFn(index: any, item: any): void {
    return index;  
  }

}
