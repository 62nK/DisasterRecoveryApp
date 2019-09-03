import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCodeManagementComponent } from './machine-code-management.component';

describe('MachineCodeManagementComponent', () => {
  let component: MachineCodeManagementComponent;
  let fixture: ComponentFixture<MachineCodeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineCodeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineCodeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
