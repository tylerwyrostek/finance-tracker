import { Component, Input, OnInit } from '@angular/core';
import { ExpectedIncome } from 'src/app/planning/planning.types';

@Component({
  selector: 'app-finance-widget',
  templateUrl: './finance-widget.component.html',
  styleUrls: ['./finance-widget.component.css']
})
export class FinanceWidgetComponent implements OnInit {
  @Input() depositTotal: number = 0;
  @Input() withdrawalTotal: number = 0;
  @Input() plannedIncome: ExpectedIncome[] = [];
  plannedIncomeTotal: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.calculatePlannedIncome();
  }

  private calculatePlannedIncome(): void{
    this.plannedIncome.forEach(income =>{
      this.plannedIncomeTotal  += income.Income;
    })

    console.log(this.plannedIncomeTotal);
  }

}
