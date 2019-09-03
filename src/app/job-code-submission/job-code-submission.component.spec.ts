import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCodeSubmissionComponent } from './job-code-submission.component';

describe('JobCodeSubmissionComponent', () => {
  let component: JobCodeSubmissionComponent;
  let fixture: ComponentFixture<JobCodeSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCodeSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCodeSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
