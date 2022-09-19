import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transaction } from 'src/app/transactions/transactions.types';

import { FinanceWidgetComponent } from './finance-widget.component';

describe('FinanceWidgetComponent', () => {
  let component: FinanceWidgetComponent;
  let fixture: ComponentFixture<FinanceWidgetComponent>;
  let mockPlannedFinances: any = {
    expectedIncome: [],
    month: null,
    needExpenses: [],
    wantExpenses: [],
    savingExpenses: []
  };

  let mockTransactions: Transaction[] = []

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceWidgetComponent);
    component = fixture.componentInstance;
    component.plannedFinances = mockPlannedFinances;
    component.transactions = mockTransactions;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
