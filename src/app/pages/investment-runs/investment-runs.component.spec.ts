import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentRunsComponent } from './investment-runs.component';

describe('InvestmentRunsComponent', () => {
  let component: InvestmentRunsComponent;
  let fixture: ComponentFixture<InvestmentRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentRunsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
