import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndRunComponent } from './end-run.component';

describe('WonComponent', () => {
  let component: EndRunComponent;
  let fixture: ComponentFixture<EndRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
