import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCodeManagementComponent } from './job-code-management.component';

describe('JobCodeManagementComponent', () => {
  let component: JobCodeManagementComponent;
  let fixture: ComponentFixture<JobCodeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCodeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCodeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
