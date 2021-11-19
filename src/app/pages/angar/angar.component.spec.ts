import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngarComponent } from './angar.component';

describe('AngarComponent', () => {
  let component: AngarComponent;
  let fixture: ComponentFixture<AngarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
