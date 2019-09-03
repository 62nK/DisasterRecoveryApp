import { TestBed } from '@angular/core/testing';

import { MachineCodeService } from './machine-code.service';

describe('MachineCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachineCodeService = TestBed.get(MachineCodeService);
    expect(service).toBeTruthy();
  });
});
