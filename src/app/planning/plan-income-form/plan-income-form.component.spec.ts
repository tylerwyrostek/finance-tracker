import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpectedIncome } from '../planning.types';

import { PlanIncomeFormComponent } from './plan-income-form.component';

describe('PlanIncomeFormComponent', () => {
  let component: PlanIncomeFormComponent;
  let fixture: ComponentFixture<PlanIncomeFormComponent>;
  let mockIncome: ExpectedIncome[] = [
    {Income: 1000, Index: 0},
    {Income:2500, Index: 1}
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanIncomeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanIncomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.userIncome = mockIncome;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new income to userIncome Array', ()=>{
    //arrange
    let newIncome: ExpectedIncome = {Income: 1000, Index: component.userIncome.length};
    //act 
    component.addIncome(newIncome);

    //assert
    expect(component.userIncome.length).toEqual(3);
  });

  it('should delete an income for userIncome Array', ()=>{
    //arrange
    let currIncome: ExpectedIncome = {Income: 1000, Index: 0};
    //act 
    component.deleteIncome(currIncome);
    console.log(component.userIncome);

    //assert
    expect(component.userIncome.length).toEqual(1);
  })
});
