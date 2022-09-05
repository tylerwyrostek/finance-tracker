import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningPercentageFormComponent } from './planning-percentage-form.component';

describe('PlanningPercentageFormComponent', () => {
  let component: PlanningPercentageFormComponent;
  let fixture: ComponentFixture<PlanningPercentageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningPercentageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningPercentageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
