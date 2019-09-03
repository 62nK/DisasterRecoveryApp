import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCodeSubmissionComponent } from './machine-code-submission.component';

describe('MachineCodeSubmissionComponent', () => {
  let component: MachineCodeSubmissionComponent;
  let fixture: ComponentFixture<MachineCodeSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineCodeSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineCodeSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
