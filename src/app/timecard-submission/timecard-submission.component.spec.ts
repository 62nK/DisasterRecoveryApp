import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardSubmissionComponent } from './timecard-submission.component';

describe('TimecardSubmissionComponent', () => {
  let component: TimecardSubmissionComponent;
  let fixture: ComponentFixture<TimecardSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
