import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardApprovalComponent } from './timecard-approval.component';

describe('TimecardApprovalComponent', () => {
  let component: TimecardApprovalComponent;
  let fixture: ComponentFixture<TimecardApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
