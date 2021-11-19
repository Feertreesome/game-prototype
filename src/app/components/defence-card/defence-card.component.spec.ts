import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenceCardComponent } from './defence-card.component';

describe('DefenceCardComponent', () => {
  let component: DefenceCardComponent;
  let fixture: ComponentFixture<DefenceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefenceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
