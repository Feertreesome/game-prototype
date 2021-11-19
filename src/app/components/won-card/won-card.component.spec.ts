import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonCardComponent } from './won-card.component';

describe('WonCardComponent', () => {
  let component: WonCardComponent;
  let fixture: ComponentFixture<WonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
