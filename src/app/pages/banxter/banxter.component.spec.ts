import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanxterComponent } from './banxter.component';

describe('BanxterComponent', () => {
  let component: BanxterComponent;
  let fixture: ComponentFixture<BanxterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanxterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanxterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
