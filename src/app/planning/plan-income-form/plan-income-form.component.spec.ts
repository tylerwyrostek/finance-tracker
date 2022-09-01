import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanIncomeFormComponent } from './plan-income-form.component';

describe('PlanIncomeFormComponent', () => {
  let component: PlanIncomeFormComponent;
  let fixture: ComponentFixture<PlanIncomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanIncomeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanIncomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
