import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcarsAppComponent } from './gcars-app.component';

describe('GcarsAppComponent', () => {
  let component: GcarsAppComponent;
  let fixture: ComponentFixture<GcarsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcarsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcarsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
