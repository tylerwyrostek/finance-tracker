import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanExpensesFormComponent } from './plan-expenses-form.component';

describe('PlanExpensesFormComponent', () => {
  let component: PlanExpensesFormComponent;
  let fixture: ComponentFixture<PlanExpensesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanExpensesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanExpensesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
