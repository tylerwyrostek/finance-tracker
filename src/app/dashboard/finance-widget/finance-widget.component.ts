import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-widget',
  templateUrl: './finance-widget.component.html',
  styleUrls: ['./finance-widget.component.css']
})
export class FinanceWidgetComponent implements OnInit {
  @Input() depositTotal: number = 0;
  @Input() withdrawalTotal: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
