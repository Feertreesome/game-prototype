import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostCardComponent } from './lost-card.component';

describe('LostCardComponent', () => {
  let component: LostCardComponent;
  let fixture: ComponentFixture<LostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
